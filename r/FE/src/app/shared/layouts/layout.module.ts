import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedPageButtonModule } from '../components/buttonss/shared-page-button/shared-page-button.module';
import { SharedLoginLayoutFormComponent } from './shared-login-layout-form/shared-login-layout-form.component';
import { FormModule } from '../components/forms/form.module';
import { SharedButtonModule } from '../components/buttonss/shared-button/shared-button.module';

@NgModule({
  declarations: [SharedLoginLayoutFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedPageButtonModule,
    FormModule,
    SharedButtonModule,
  ],
  exports: [SharedLoginLayoutFormComponent],
})
export class LayoutModule {}
