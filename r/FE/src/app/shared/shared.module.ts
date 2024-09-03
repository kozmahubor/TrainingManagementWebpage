import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layouts/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule],
  exports: [CommonModule, LayoutModule],
})
export class SharedModule {}
