import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SideNavModule } from '../nav/sidenav.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    SideNavModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [MainComponent],
})
export class MainModule {}
