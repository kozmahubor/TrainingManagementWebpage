import { Component, Input, ViewEncapsulation } from '@angular/core';
import FormLayoutType from '../../types/form-layout.type';

@Component({
  selector: 'app-shared-login-layout-form',
  styleUrl: './shared-login-layout-form.component.scss',
  template: `
    <div class="layout-form">
      <div class="poly-bg"></div>
      <app-shared-login-form [options]="props.panel" />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SharedLoginLayoutFormComponent {
  @Input() props!: FormLayoutType;
}
