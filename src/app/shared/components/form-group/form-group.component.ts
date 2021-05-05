import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  template: `<div class="form-group">
    <label class="fs-20 lh-28 fw-600 mb-1">{{ label }}</label>
    <input
      class="fs-16 lh-16 fw-600 shadow"
      [type]="type"
      [placeholder]="placeholder"
      [value]="initValue || ''"
    />
    <span [ngClass]="'icon-' + icon" class="icon square-20"></span>
  </div>`,
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() icon: string;
  @Input() placeholder: string;
  @Input() initValue: string;
}
