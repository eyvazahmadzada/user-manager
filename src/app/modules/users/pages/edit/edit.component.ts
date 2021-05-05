import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  user: User;

  // Number of avatar images
  avatars: number = 12;
  selectedAvatarId: number;

  constructor(private location: Location) {}

  navigateBack() {
    // Wait 400 milliseconds for modal animation
    setTimeout(() => {
      this.location.back();
    }, 400);
  }

  onSetSelected(id: number) {
    this.selectedAvatarId = id;
  }
}
