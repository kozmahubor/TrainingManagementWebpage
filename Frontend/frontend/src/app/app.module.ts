import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavModule } from './core/page/nav/sidenav.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './core/page/main/main.module';
import { ToolbarModule } from './core/page/toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavModule,
    SharedModule,
    MainModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
