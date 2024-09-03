import { Injectable } from '@angular/core'

import { Config } from '../../config'
import { IAuthModel } from '../../models'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    public setAuthModel(authModel: IAuthModel) {
        localStorage.setItem(Config['auth-key'], JSON.stringify(authModel))
    }

    public getAuthModel(): IAuthModel | null {
        const token = localStorage.getItem(Config['auth-key'])
        return token === null ? null : JSON.parse(localStorage.getItem(Config['auth-key'])!)
    }

    public clear(){
        localStorage.removeItem(Config['auth-key'])
    }
}