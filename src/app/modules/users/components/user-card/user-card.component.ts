import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User;

  // Send user id to parent on delete target
  @Output() onDelete = new EventEmitter<number>();

  // Array of actions
  menuItems: string[] = ['view', 'edit', 'delete'];

  isMenuOpen: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Navigate to different routes according to the actions
  onPerformAction(actionType: string) {
    if (actionType === 'delete') {
      this.onDelete.emit(this.user.id);
    }
    this.router.navigate([`${actionType}/${this.user.id}`], {
      relativeTo: this.route
    });
    this.isMenuOpen = false;
  }

  // Close menu when clicked outside
  onClickedOutside() {
    this.isMenuOpen = false;
  }
}
