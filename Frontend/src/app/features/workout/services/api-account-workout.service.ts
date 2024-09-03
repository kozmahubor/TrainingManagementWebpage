import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApiBaseService,
  GuardAdminService,
  GuardUserService,
  LocalStorageService,
  LoggerService,
} from '../../../core/services';
import {IWorkoutModel} from "../../../core/models";
@Injectable({
  providedIn: 'root',
})
export class ApiAccountWorkoutService extends ApiBaseService {
  constructor(
    router: Router,
    logger: LoggerService,
    storageService: LocalStorageService,
    guardUserService: GuardUserService,
    guardAdminService: GuardAdminService
  ) {
    super(router, logger, storageService, guardUserService, guardAdminService);
    this.defineBaseUrl('workout');
    this.defineRole('User');
  }

  public getAllWorkouts() {
    return this.wrap<IWorkoutModel[]>(
      fetch(this.baseUrl, {
        headers: this.defineHeaders(['auth']),
      }),
      (data) => {
        return data;
      }
    );
  }

  public addWorkout(workout: IWorkoutModel) {
    return this.wrap<IWorkoutModel>(
      fetch(this.baseUrl, {
        method: 'post',
        headers: this.defineHeaders(['content-json', 'auth']),
        body: JSON.stringify(workout),
      }),
      (data) => {
        return data;
        console.log('adding');
      }
    );
  }

  public searchWorkouts(prop: string) {
    return this.wrap<IWorkoutModel[]>(
      fetch(`${this.baseUrl}/searchworkouts/?search=${prop}`, {
        headers: this.defineHeaders(['auth']),
      }),
      (data) => {
        return data;
      }
    );
  }
}
