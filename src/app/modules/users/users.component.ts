import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersData } from './interfaces/users';

import { User } from './models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sortOptions: string[] = ['First Name', 'Last Name', 'Email'];
  isDeleteModeOn: boolean = false;
  isLoading: boolean = false;

  totalPages: number;
  userList: User[] = [];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get current page from route
    this.route.queryParams.subscribe((params) => {
      const pageParam = +params['page'];

      // Get users from database with page 1, if pageParam is undefined
      this.isLoading = true;
      this.usersService.getUsers(pageParam || 1).then((res: UsersData) => {
        this.totalPages = res.total_pages;
        this.userList = res.data;

        this.isLoading = false;
      });
    });
  }

  openDeleteModal(id: number) {
    this.isDeleteModeOn = true;
  }

  closeDeleteModal() {
    this.isDeleteModeOn = false;
  }
}
