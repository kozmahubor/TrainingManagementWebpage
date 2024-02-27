import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedLoginFormComponent } from './shared-login-form/shared-login-form.component';
import { SharedPageButtonModule } from '../buttonss/shared-page-button/shared-page-button.module';
import { SharedButtonModule } from '../buttonss/shared-button/shared-button.module';

@NgModule({
  declarations: [SharedLoginFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedPageButtonModule,
    SharedButtonModule,
  ],
  exports: [SharedLoginFormComponent],
})
export class FormModule {}
