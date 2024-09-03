import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  styleUrl: './shared-button.component.scss',
  template: `
    <button [ngClass]="[type, classLayer].join(' ')">{{ text }}</button>
  `,
})
export class SharedButtonComponent {
  @Input() text: string = '';
  @Input() type: 'filled' | 'outlined' = 'filled';
  @Input() classLayer: string = '';
}
