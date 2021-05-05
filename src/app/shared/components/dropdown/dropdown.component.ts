import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() items: string[];

  // Declare variables for dropdown state
  isOpen: boolean = false;
  activeItem: string = '';

  ngOnInit() {
    // Set dropdown name if specified, otherwise set first item active
    this.activeItem = this.name || this.items[0];
  }

  // Close menu when clicked outside
  onClickedOutside() {
    this.isOpen = false;
  }

  // Toggle dropdown when button is clicked
  onToggle() {
    this.isOpen = !this.isOpen;
  }

  // Set item active when it gets clicked, then close menu
  onSetActive(item: string) {
    this.activeItem = item;
    this.isOpen = false;
  }
}
