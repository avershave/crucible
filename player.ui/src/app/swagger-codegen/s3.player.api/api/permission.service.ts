/*
Crucible
Copyright 2020 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a MIT (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
Carnegie Mellon(R) and CERT(R) are registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.
DM20-0181
*/

/**
 * Scenario Player API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ApiError } from '../model/apiError';
import { Permission } from '../model/permission';
import { PermissionForm } from '../model/permissionForm';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { PermissionServiceInterface }                            from './permission.serviceInterface';


@Injectable()
export class PermissionService implements PermissionServiceInterface {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Adds a Permission to a Role
     * Adds the specified Permission to the specified Role  &lt;para /&gt;  Accessible only to a SuperUser
     * @param roleId The id of the Role
     * @param permissionId The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPermissionToRole(roleId: string, permissionId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addPermissionToRole(roleId: string, permissionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addPermissionToRole(roleId: string, permissionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addPermissionToRole(roleId: string, permissionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling addPermissionToRole.');
        }
        if (permissionId === null || permissionId === undefined) {
            throw new Error('Required parameter permissionId was null or undefined when calling addPermissionToRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/roles/${encodeURIComponent(String(roleId))}/permissions/${encodeURIComponent(String(permissionId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Adds a Permission to a Team
     * Adds the specified Permission to the specified Team  &lt;para /&gt;  Accessible to a SuperUser or an Exercise Admin of the Exercise the Team is part of
     * @param teamId The id of the Team
     * @param permissionId The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPermissionToTeam(teamId: string, permissionId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addPermissionToTeam(teamId: string, permissionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addPermissionToTeam(teamId: string, permissionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addPermissionToTeam(teamId: string, permissionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling addPermissionToTeam.');
        }
        if (permissionId === null || permissionId === undefined) {
            throw new Error('Required parameter permissionId was null or undefined when calling addPermissionToTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/permissions/${encodeURIComponent(String(permissionId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Adds a Permission to a User
     * Adds the specified Permission to the specified User  &lt;para /&gt;  Accessible only to a SuperUser
     * @param userId The id of the User
     * @param permissionId The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPermissionToUser(userId: string, permissionId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addPermissionToUser(userId: string, permissionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addPermissionToUser(userId: string, permissionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addPermissionToUser(userId: string, permissionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addPermissionToUser.');
        }
        if (permissionId === null || permissionId === undefined) {
            throw new Error('Required parameter permissionId was null or undefined when calling addPermissionToUser.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/permissions/${encodeURIComponent(String(permissionId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a new Permission
     * Creates a new Permission with the attributes specified  &lt;para /&gt;  An Permission is a top-level resource that can optionally be the parent of an Exercise specific Application resource, which would inherit it&#39;s properties  &lt;para /&gt;  Accessible only to a SuperUser
     * @param form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPermission(form?: PermissionForm, observe?: 'body', reportProgress?: boolean): Observable<Permission>;
    public createPermission(form?: PermissionForm, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Permission>>;
    public createPermission(form?: PermissionForm, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Permission>>;
    public createPermission(form?: PermissionForm, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Permission>(`${this.basePath}/permissions`,
            form,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes an Permission
     * Deletes a Permission with the specified id  &lt;para /&gt;  Accessible only to a SuperUser
     * @param id The id of the Permission to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePermission(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePermission(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePermission(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePermission(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePermission.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/permissions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a specific Permission by id
     * Returns the Permission with the id specified  &lt;para /&gt;  Accessible to all authenticated Users
     * @param id The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPermission(id: string, observe?: 'body', reportProgress?: boolean): Observable<Permission>;
    public getPermission(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Permission>>;
    public getPermission(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Permission>>;
    public getPermission(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPermission.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Permission>(`${this.basePath}/permissions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all Permissions in the system
     * Returns a list of all of the Permissions in the system.  &lt;para /&gt;  Only accessible to a SuperUser
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPermissions(observe?: 'body', reportProgress?: boolean): Observable<Array<Permission>>;
    public getPermissions(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Permission>>>;
    public getPermissions(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Permission>>>;
    public getPermissions(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Permission>>(`${this.basePath}/permissions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a User&#39;s permissions for an Exercise
     * Returns a list of all of the Permissions for the User on this Exercise  &lt;para /&gt;  If the User is a member of the Exercise, this will first use any Permissions on their Primary Team Membership, and then apply any Permissions on the Team itself.  If the User is not a member of the Exercise, the User&#39;s top level Permissions will be returned.
     * @param exerciseId 
     * @param userId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserExercisePermissions(exerciseId: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Permission>>;
    public getUserExercisePermissions(exerciseId: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Permission>>>;
    public getUserExercisePermissions(exerciseId: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Permission>>>;
    public getUserExercisePermissions(exerciseId: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (exerciseId === null || exerciseId === undefined) {
            throw new Error('Required parameter exerciseId was null or undefined when calling getUserExercisePermissions.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserExercisePermissions.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Permission>>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/exercises/${encodeURIComponent(String(exerciseId))}/permissions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a User&#39;s permissions for the Exercise a given Team is part of
     * Returns a list of all of the Permissions for the User on the Exercise that the specified Team belongs to  &lt;para /&gt;  If the User is a member of the Exercise, this will first use any Permissions on their Primary Team Membership, and then apply any Permissions on the Team itself.  If the User is not a member of the Exercise, the User&#39;s top level Permissions will be returned.
     * @param teamId 
     * @param userId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserExercisePermissionsByTeam(teamId: string, userId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Permission>>;
    public getUserExercisePermissionsByTeam(teamId: string, userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Permission>>>;
    public getUserExercisePermissionsByTeam(teamId: string, userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Permission>>>;
    public getUserExercisePermissionsByTeam(teamId: string, userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getUserExercisePermissionsByTeam.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserExercisePermissionsByTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Permission>>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/teams/${encodeURIComponent(String(teamId))}/permissions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes a Permission from a Role
     * Removes the specified Permission from the specified Role  &lt;para /&gt;  Accessible only to a SuperUser
     * @param roleId The id of the Role
     * @param permissionId The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removePermissionFromRole(roleId: string, permissionId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removePermissionFromRole(roleId: string, permissionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removePermissionFromRole(roleId: string, permissionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removePermissionFromRole(roleId: string, permissionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling removePermissionFromRole.');
        }
        if (permissionId === null || permissionId === undefined) {
            throw new Error('Required parameter permissionId was null or undefined when calling removePermissionFromRole.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/roles/${encodeURIComponent(String(roleId))}/permissions/${encodeURIComponent(String(permissionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes a Permission from a Team
     * Removes the specified Permission from the specified Team  &lt;para /&gt;  Accessible to a SuperUser or an Exercise Admin of the Exercise the Team is part of
     * @param teamId The id of the Team
     * @param permissionId The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removePermissionFromTeam(teamId: string, permissionId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removePermissionFromTeam(teamId: string, permissionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removePermissionFromTeam(teamId: string, permissionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removePermissionFromTeam(teamId: string, permissionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling removePermissionFromTeam.');
        }
        if (permissionId === null || permissionId === undefined) {
            throw new Error('Required parameter permissionId was null or undefined when calling removePermissionFromTeam.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/permissions/${encodeURIComponent(String(permissionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes a Permission from a User
     * Removes the specified Permission from the specified User  &lt;para /&gt;  Accessible only to a SuperUser
     * @param userId The id of the User
     * @param permissionId The id of the Permission
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removePermissionFromUser(userId: string, permissionId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removePermissionFromUser(userId: string, permissionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removePermissionFromUser(userId: string, permissionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removePermissionFromUser(userId: string, permissionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling removePermissionFromUser.');
        }
        if (permissionId === null || permissionId === undefined) {
            throw new Error('Required parameter permissionId was null or undefined when calling removePermissionFromUser.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/permissions/${encodeURIComponent(String(permissionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a Permission
     * Updates a Permission with the attributes specified  &lt;para /&gt;  Accessible only to a SuperUser
     * @param id 
     * @param form 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePermission(id: string, form?: PermissionForm, observe?: 'body', reportProgress?: boolean): Observable<Permission>;
    public updatePermission(id: string, form?: PermissionForm, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Permission>>;
    public updatePermission(id: string, form?: PermissionForm, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Permission>>;
    public updatePermission(id: string, form?: PermissionForm, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePermission.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Permission>(`${this.basePath}/permissions/${encodeURIComponent(String(id))}`,
            form,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

