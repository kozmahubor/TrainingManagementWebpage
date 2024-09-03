import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import { SharedButtonModule } from '../../../shared/components/buttonss/shared-button/shared-button.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, RouterModule, SharedButtonModule],
  providers: [],
  bootstrap: [],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
