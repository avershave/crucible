/*
Crucible
Copyright 2020 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a MIT (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
Carnegie Mellon(R) and CERT(R) are registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.
DM20-0181
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vm } from '../../swagger-codegen/dispatcher.api/model/vm';
import { Command } from '../../models/command';
// TODO: resolve imports when API changes nouns
import { DispatchTask } from 'src/app/swagger-codegen/dispatcher.api/model/models';
import { Task } from 'src/app/data/task/task.store';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  public vmList = new BehaviorSubject<Array<Vm>>(new Array<Vm>());
  public command = new BehaviorSubject<Command>(undefined);
  public task = new BehaviorSubject<Task>(undefined);
  private _task = {
    name: '',
    description: '',
    scenarioTemplateId: '',
    scenarioId: '',
    action: DispatchTask.ActionEnum.GuestProcessRun,
    vmMask: '',
    vmList: [],
    apiUrl: '',
    inputString: '',
    expectedOutput: '',
    expirationSeconds: 0,
    intervalSeconds: 0,
    iterations: 0,
    triggerTaskId: '',
    triggerCondition: DispatchTask.TriggerConditionEnum.Manual,
  };

  constructor() { }

  AddVm(vm: Vm) {
    const newList: Array<Vm> = this.vmList.value;
    newList.push(vm);
    this.vmList.next(newList);
    this.buildRawDispatcherCommand();
  }

  RemoveVm(vm: Vm) {
    const newList: Array<Vm> = this.vmList.value.filter(virtM => virtM.id !== vm.id);
    this.vmList.next(newList);
    this.buildRawDispatcherCommand();
  }

  UpdateCommand(cmd: Command) {
    this.command.next(cmd);
    this.buildRawDispatcherCommand();
  }

  private buildRawDispatcherCommand() {
    if (this.command.value !== undefined) {
      // Get first vm moid, NOT a list!
      const moid = this.vmList.value.length > 0 ? this.vmList.value[0].id : '';
      //// Get vm list
      // const vmGuids = Array<string>();
      // this.vmList.value.forEach(vm => {
      //   vmGuids.push(vm.id);
      // });

      // Build dispatcher command
      let dispatcherCmd = `{ "Moid": "{moid}"`;
      this.command.value.parameters.filter(obj => obj.key !== 'Moid').forEach(param => {
        dispatcherCmd += `, "${ param.key }": "${ param.value.replace(/\\/g, '\\\\').replace(/"/g, '\\\"')}"`;
      });
      dispatcherCmd += '}';
      this._task.inputString = dispatcherCmd;
      this._task.apiUrl = this.command.value.api;
      this._task.vmList = [moid];
      this._task.action =
        DispatchTask.ActionEnum[Object.keys(DispatchTask.ActionEnum).find(key =>
        DispatchTask.ActionEnum[key] ===  this.command.value.action)];
      // let evryone know the new Task
      this.task.next(JSON.parse(JSON.stringify(this._task)));
    }
  }


  stringToEnum<ET, T>(enumObj: ET, str: keyof ET): T {
    return enumObj[<string>str];
  }
}


