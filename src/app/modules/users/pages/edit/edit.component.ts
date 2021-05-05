import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../models/user.model';
import formGroupsData from '../../data/form-groups';
import { FormGroup } from '../../models/form-group.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {
  user: User = {
    id: 1,
    first_name: 'Eyvaz',
    last_name: 'Ahmadzada',
    email: 'test@test.com',
    avatar: ''
  };

  // Number of avatar images
  avatars: number = 12;
  selectedAvatarId: number;

  // Modal state
  isModalOpen: boolean = false;

  formGroups: FormGroup[] = formGroupsData;

  constructor(private location: Location) {}

  ngOnInit() {
    // Set user avatar id current
    // this.selectedAvatarId = this.user.avatar;

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
    console.log(form.value);
  }

  ngOnDestroy() {
    this.isModalOpen = false;
  }
}
