import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureErrorPageRoutingModule } from './feature-error-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {ErrorPageComponent} from "./error-page/error-page.component";

@NgModule({
  declarations: [ErrorPageComponent],
  exports: [FormsModule, SharedModule, FeatureErrorPageRoutingModule],
})
export class FeatureErrorPageModule {}
