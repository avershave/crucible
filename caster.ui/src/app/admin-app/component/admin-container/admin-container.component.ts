/*
Crucible
Copyright 2020 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a MIT (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
Carnegie Mellon(R) and CERT(R) are registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.
DM20-0181
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CwdAuthService } from '../../../sei-cwd-common/cwd-auth/services';
import { CwdSettingsService } from '../../../sei-cwd-common/cwd-settings/services';
import { UserService, CurrentUserQuery } from '../../../users/state';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "cas-admin-container",
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss'],
})
export class AdminContainerComponent implements OnInit, OnDestroy {
  public username: string;
  public titleText: string;
  public isSuperUser = false;
  public topBarColor = '#0FABEA';
  public definitionId = '';
  public isSidebarOpen = true;
  public usersText = 'Users';
  public modulesText = 'Modules';
  public workspacesText = 'Workspaces';
  public showStatus = this.usersText;

  private unsubscribe$ = new Subject();

  constructor(
    private authService: CwdAuthService,
    private settingsService: CwdSettingsService,
    private userService: UserService,
    private currentUserQuery: CurrentUserQuery,
    private routerQuery: RouterQuery,
    private router: Router
  ) {}

  ngOnInit() {
    // Set the topbar color from config file
    this.topBarColor = this.settingsService.settings.AppTopBarHexColor;

    // Set the page title from configuration file
    this.titleText = this.settingsService.settings.AppTopBarText;
    this.currentUserQuery
      .select()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cu) => {
        this.isSuperUser = cu.isSuperUser;
        this.username = cu.name;
      });
    this.userService.setCurrentUser();

    this.routerQuery
      .selectQueryParams<string>('section')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((section) => {
        if (section != null) {
          this.showStatus = section;
        }
      });
  }

  logout(): void {
    this.authService.logout();
    this.isSuperUser = false;
  }

  /**
   * Set the display to Users
   */
  adminGotoUsers(): void {
    this.navigateToSection(this.usersText);
  }

  /**
   * Sets the display to Modules
   */
  adminGotoModules(): void {
    this.navigateToSection(this.modulesText);
  }

  /**
   * Sets the display to Workspaces
   */
  adminGotoWorkspaces(): void {
    this.navigateToSection(this.workspacesText);
  }

  private navigateToSection(sectionName: string) {
    this.router.navigate([], {
      queryParams: { section: sectionName },
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
