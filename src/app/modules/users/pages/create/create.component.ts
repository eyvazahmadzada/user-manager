import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private location: Location) {}

  navigateBack() {
    // Wait 400 milliseconds for modal animation
    setTimeout(() => {
      this.location.back();
    }, 400);
  }
}
