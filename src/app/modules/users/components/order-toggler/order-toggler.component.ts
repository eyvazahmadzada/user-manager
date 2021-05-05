import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-toggler',
  templateUrl: './order-toggler.component.html',
  styleUrls: ['./order-toggler.component.scss']
})
export class OrderTogglerComponent {
  // Declare variable for toggle state
  isAsc: boolean = true;

  // Toggle button when it is clicked
  onToggle() {
    this.isAsc = !this.isAsc;
  }
}
