import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: string;
  @Input() bgColor: string;
  @Input() disabled: boolean;
  @Input() type: string;

  @Output() onClick = new EventEmitter();

  buttonClicked() {
    this.onClick.emit();
  }
}
