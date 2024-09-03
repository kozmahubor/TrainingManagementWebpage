import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AccountType } from '../types';
import {
  ApiBaseService,
  GuardAdminService,
  GuardUserService,
  LocalStorageService,
  LoggerService,
} from 'src/app/core/services';
import { IAuthModel } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService extends ApiBaseService {
  constructor(
    router: Router,
    logger: LoggerService,
    storageService: LocalStorageService,
    guardUserService: GuardUserService,
    guardAdminService: GuardAdminService
  ) {
    super(router, logger, storageService, guardUserService, guardAdminService);
    this.defineBaseUrl('auth');
    this.defineRole('User');
  }

  public login(payload: AccountType) {
    return this.wrap<IAuthModel>(
      fetch(this.baseUrl, {
        method: 'post',
        headers: this.defineHeaders(['content-json']),
        body: JSON.stringify(payload),
      }),
      (data) => {
        this.storageService.setAuthModel(data);
        this.router.navigate(['']);
        return data;
      }
    );
  }

  public register(payload: AccountType) {
    payload.userName = payload.email;
    return this.wrap<IAuthModel>(
      fetch(this.baseUrl, {
        method: 'put',
        headers: this.defineHeaders(['content-json']),
        body: JSON.stringify(payload),
      }),
      (data) => {
        this.router.navigate(['']);
        return data;
      },
      true
    );
    /*
        {
            "email": "newuser@gmail.com",
            "userName": "newuser",
            "firstName": "user",
            "lastName": "new",
            "password": "NewUser1@"
        }
    */
  }
}
