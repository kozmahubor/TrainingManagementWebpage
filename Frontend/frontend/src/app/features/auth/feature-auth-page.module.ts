import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutModule } from 'src/app/shared/layouts/layout.module';
import { FeatureAuthPageRoutingModule } from './feature-auth-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginDialogComponent } from './pages/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LoginDialogComponent,
  ],
  imports: [FeatureAuthPageRoutingModule, LayoutModule, SharedModule],
})
export class FeatureAuthPageModule {}
