import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-toggler',
  templateUrl: './order-toggler.component.html',
  styleUrls: ['./order-toggler.component.scss']
})
export class OrderTogglerComponent {
  @Output() onChange = new EventEmitter<boolean>();

  // Declare variable for toggle state
  isAsc: boolean = true;

  // Toggle button when it is clicked
  onToggle() {
    this.isAsc = !this.isAsc;

    // Send new order to parent
    this.onChange.emit(this.isAsc);
  }
}
