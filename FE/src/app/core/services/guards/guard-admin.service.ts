import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../config';

import { IGuardBase } from './interfaces';

import { LocalStorageService } from '../utils/local-storage.service';
import { IAuthModel } from '../../models';
import { RoleType } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class GuardAdminService implements IGuardBase {
  constructor(
    private router: Router,
    protected storageService: LocalStorageService
  ) {}

  private isExpired(authModel: IAuthModel): boolean {
    const exp = new Date(authModel.expiration);
    return exp.getTime() <= Date.now();
  }

  public isLoggedIn(): boolean {
    let result = false;
    let authModel = this.storageService.getAuthModel();
    if (authModel !== null) {
      const role = JSON.parse(window.atob(authModel.token.split('.')[1]))[
        Config['role-key']
      ] as RoleType;
      if (role === 'Admin' && !this.isExpired(authModel)) result = true;
      else console.log(role); //this.storageService.clear()
    }
    return result;
  }
  public canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
