import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { FeatureHomePageRoutingModule } from './feature-home-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent],
  exports: [FormsModule, SharedModule, FeatureHomePageRoutingModule],
})
export class FeatureHomePageModule {}
