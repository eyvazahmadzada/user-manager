import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from 'src/app/modules/users/models/dropdown-item';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() items: DropdownItem[];

  @Output() onChange = new EventEmitter<string>();

  // Declare variables for dropdown state
  isOpen: boolean = false;
  activeItemLabel: string;

  ngOnInit() {
    // Set dropdown name if specified, otherwise set first item active
    this.activeItemLabel = this.name || this.items[0].name;
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
  onSetActive(item: DropdownItem) {
    this.activeItemLabel = item.label;
    this.isOpen = false;

    // Send update to parent
    this.onChange.emit(item.name);
  }
}
