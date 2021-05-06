import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user.model';
import formGroupsData from '../../data/form-groups';
import { FormGroup } from '../../models/form-group.model';
import { UsersService } from '../../users.service';
import { UserData } from '../../interfaces/users';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {
  user: User;

  // Number of avatar images
  avatars: number = 12;
  selectedAvatarId: number;

  // Modal state
  isModalOpen: boolean = false;

  formGroups: FormGroup[] = formGroupsData;
  isLoading: boolean = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    // Animate modal on load
    setTimeout(() => (this.isModalOpen = true));

    // Get user id from route
    this.route.params.subscribe((params) => {
      const userId = +params['id'];

      this.isLoading = true;
      this.usersService.getUser(userId).then((res: UserData) => {
        this.user = res.data;
        this.isLoading = false;
      });
    });
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
    // Update user in database
    this.usersService
      .updateUser(this.user.id as number, {
        avatar: `https://reqres.in/img/faces/${this.selectedAvatarId}-image.jpg`,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email
      })
      .then((res) => (this.isLoading = false));
  }

  ngOnDestroy() {
    this.isModalOpen = false;
  }
}
