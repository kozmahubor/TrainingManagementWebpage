import {ChangeDetectorRef, Component, HostListener, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {
  GuardAdminService,
  GuardUserService,
  LocalStorageService,
} from '../../services';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import {LoginDialogComponent} from "../../../features/auth/pages/login-dialog/login-dialog.component";

@Component({
  selector: 'app-sidenav',
  styleUrl: './sidenav.component.scss',
  templateUrl: './sidenav.component.html',
})
export class SideNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  opened = true;

  menuVariable = true;
  menu_icon_variable = false;


  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault(); // Prevent the default action of closing the side-navbar
  }

  private _mobileQueryListener: () => void;
  constructor(
    private dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public router: Router,
    public localStorageService: LocalStorageService,
    public guardUserService: GuardUserService,
    public guardAdminService: GuardAdminService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1920px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '720px',
      height: 'auto', // Set the height to 'auto' to adjust based on content
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // handle dialog close event if needed
    });
  }
}
