import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button class="button shadow hover-dark fs-20 lh-20 fw-700">
    <span [ngClass]="'icon-' + icon" class="icon square-20 mr-lg-2"></span>
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: string;
}
