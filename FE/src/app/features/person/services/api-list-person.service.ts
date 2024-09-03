import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { IProfileEditModel, IProfileModel } from '../../../core/models';
import {
  ApiBaseService,
  GuardAdminService,
  GuardUserService,
  LocalStorageService,
  LoggerService,
} from '../../../core/services';
@Injectable({
  providedIn: 'root',
})
export class ApiProfileService extends ApiBaseService {
  profiles: IProfileModel[] = [];
  constructor(
    router: Router,
    logger: LoggerService,
    storageService: LocalStorageService,
    guardUserService: GuardUserService,
    guardAdminService: GuardAdminService
  ) {
    super(router, logger, storageService, guardUserService, guardAdminService);
    this.defineBaseUrl('person');
    this.defineRole('User');
  }

  showThisUser(profile: IProfileModel) {
    console.log(profile);
  }

  public getAllProfiles() {
    return this.wrap<IProfileModel[]>(
      fetch(this.baseUrl, {
        headers: this.defineHeaders(['auth']),
      }),
      (data) => {
        return data;
      }
    );
  }
  public getAllProfilesWithWorkouts() {
    return this.wrap<IProfileModel[]>(
      fetch(this.baseUrl + '/withWorkouts', {
        headers: this.defineHeaders(['auth']),
      }),
      (data) => {
        return data;
      }
    );
  }

  public addProfile(profile: IProfileModel) {
    return this.wrap<IProfileModel>(
      fetch(this.baseUrl, {
        method: 'post',
        headers: this.defineHeaders(['content-json', 'auth']),
        body: JSON.stringify(profile),
      }),
      (data) => {
        return data;
      }
    );
  }

  public updateProfile(profile: IProfileModel) {
    return this.wrap<IProfileModel>(
      fetch(this.baseUrl, {
        method: 'put',
        headers: this.defineHeaders(['content-json', 'auth']),
        body: JSON.stringify(profile),
      }),
      (data) => {
        return data;
      }
    );
  }

  public deleteProfile(id: Guid) {
    return this.wrap<IProfileModel>(
      fetch(`${this.baseUrl}/${id}`, {
        method: 'delete',
        headers: this.defineHeaders(['auth']),
      }),
      (data) => {
        return data;
      }
    );
  }

  public searchProfiles(prop: string) {
    return this.wrap<IProfileModel[]>(
      fetch(`${this.baseUrl}/searchprofiles/?search=${prop}`, {
        headers: this.defineHeaders(['auth']),
      }),
      (data) => {
        return data;
      }
    );
  }
}
