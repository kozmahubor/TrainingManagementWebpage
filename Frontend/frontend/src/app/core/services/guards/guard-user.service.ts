import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { IGuardBase } from './interfaces'

import { LocalStorageService } from '../utils/local-storage.service'

import { IAuthModel } from '../../models'

@Injectable({
    providedIn: 'root'
})
export class GuardUserService implements IGuardBase {

    constructor(
        private router: Router,
        protected storageService: LocalStorageService
    ) { }

    private isExpired(authModel: IAuthModel): boolean {
        const exp = new Date(authModel.expiration)
        return exp.getTime() <= Date.now()
    }

    public isLoggedIn() : boolean {
        let result = false
        let authModel = this.storageService.getAuthModel()
        if (authModel !== null) {
            if (!this.isExpired(authModel)) result = true
            else this.storageService.clear()
        }
        return result
    }

    public canActivate() : boolean {
        if (!this.isLoggedIn()) {
            this.router.navigate(['auth/login'])
            return false
        }
        return true
    }

}