import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  GuardAdminService,
  GuardUserService,
  LocalStorageService,
} from '../../services';
import { NavbarIcon } from '../../../../assets/images';

@Component({
  selector: 'app-toolbar',
  styleUrl: './toolbar.component.scss',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  navbarIcon = NavbarIcon;
  menuVariable = true;
  menu_icon_variable = false;
  constructor(
    public router: Router,
    public localStorageService: LocalStorageService,
    public guardUserService: GuardUserService,
    public guardAdminService: GuardAdminService
  ) {}

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }
}
