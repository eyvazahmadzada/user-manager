import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { FormGroup } from '../../models/form-group.model';
import formGroupsData from '../../data/form-groups';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserData } from '../../interfaces/users';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  user: User;

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
      // Get user from database
      this.usersService.getUser(userId).then((res: UserData) => {
        this.user = res.data;
        this.isLoading = false;
      });
    });
  }

  navigateBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.isModalOpen = false;
  }
}
