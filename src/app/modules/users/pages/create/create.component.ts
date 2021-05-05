import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
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
