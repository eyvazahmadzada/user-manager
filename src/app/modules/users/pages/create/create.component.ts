import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormGroup } from '../../models/form-group.model';
import formGroupsData from '../../data/form-groups';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit, OnDestroy {
  // Number of avatar images
  avatars: number = 12;
  selectedAvatarId: number;

  // Modal state
  isModalOpen: boolean = false;

  formGroups: FormGroup[] = formGroupsData;
  isLoading: boolean = false;

  constructor(private location: Location, private usersService: UsersService) {}

  ngOnInit() {
    // Animate modal on load
    setTimeout(() => (this.isModalOpen = true));
  }

  navigateBack() {
    this.location.back();
  }

  onSetSelected(id: number) {
    this.selectedAvatarId = id;
  }

  onSubmit(form: NgForm) {
    const userData = form.value;

    this.isLoading = true;
    // Create user in database
    this.usersService
      .createUser({
        avatar: `https://reqres.in/img/faces/${
          this.selectedAvatarId || 1
        }-image.jpg`,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email
      })
      .then((res) => {
        this.isLoading = false;
        this.isModalOpen = false;

        // Animate modal on navigate back
        setTimeout(() => this.navigateBack(), 400);
      })
      .catch((err) => this.navigateBack());
  }

  ngOnDestroy() {
    this.isModalOpen = false;
  }
}
