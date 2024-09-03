import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPageButtonComponent } from './shared-page-button.component';

@NgModule({
  declarations: [SharedPageButtonComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [SharedPageButtonComponent],
})
export class SharedPageButtonModule {}
