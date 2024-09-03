import { Config } from '../../config';

import { Router } from '@angular/router';

import { LoggerService } from '../utils/logger.service';
import { LocalStorageService } from '../utils/local-storage.service';
import { IGuardBase, GuardUserService, GuardAdminService } from '../guards';

import { HeaderType, RoleType } from '../../types';

export class ApiBaseService {
  private guardService?: IGuardBase;

  protected baseUrl: string;

  constructor(
    protected router: Router,
    protected logger: LoggerService,
    protected storageService: LocalStorageService,
    private guardUserService: GuardUserService,
    private guardAdminService: GuardAdminService
  ) {
    this.baseUrl = '';
  }

  private unauthorized = () => {
    const error = new Error();
    error.name = 'authorization';
    throw error;
  };

  protected defineRole = (role: RoleType) => {
    switch (role) {
      case 'User':
        this.guardService = this.guardUserService;
        break;

      case 'Admin':
        this.guardService = this.guardAdminService;
        break;

      case 'Trainer':
        this.guardService = this.guardAdminService;
        break;

      default:
        this.guardService = undefined;
        break;
    }
  };

  protected defineBaseUrl = (path: string) => {
    this.baseUrl = `${Config['base-url']}/${path}`;
  };

  protected defineHeaders: (args: HeaderType[]) => Headers = (args) => {
    const headers: Headers = new Headers();
    args.map((type) => {
      switch (type) {
        case 'auth':
          const authModel = this.storageService.getAuthModel();
          headers.append('authorization', `Bearer ${authModel?.token}`);
          break;

        case 'content-json':
          headers.append('content-type', 'application/json');
          break;
      }
    });
    return headers;
  };

  protected async wrap<T>(
    request: Promise<Response>,
    callback: (res: T) => T,
    nobody: boolean = false
  ): Promise<T> {
    let result = undefined as T;
    try {
      if (this.guardService && !this.guardService.isLoggedIn()) {
        this.unauthorized();
      }
      const res = await request;
      if (res.ok) {
        if (nobody) {
          this.logger.logger('SUCCESS');
          result = callback({} as T);
        } else {
          const data = await res.json();
          this.logger.logger('SUCCESS');
          this.logger.logger(data);
          result = callback(data);
        }
      } else {
        if (res.status === 401) {
          this.unauthorized();
        }

        throw new Error(res.statusText);
      }
    } catch (error) {
      this.logger.logger('ERROR');
      this.logger.logger(error);
      if ((error as Error).name === 'authorization') {
        this.storageService.clear();
        this.router.navigate(['auth/login']);
      }
    }
    return result;
  }
}
