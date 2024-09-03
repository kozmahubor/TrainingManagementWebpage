import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [SideNavComponent],
})
export class SideNavModule {}
