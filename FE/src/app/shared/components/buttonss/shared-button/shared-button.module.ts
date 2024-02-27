import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './shared-button.component';

@NgModule({
  declarations: [SharedButtonComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [SharedButtonComponent],
})
export class SharedButtonModule {}
