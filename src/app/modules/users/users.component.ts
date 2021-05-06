import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Utils from 'src/app/shared/utils';
import { UsersData } from './interfaces/users';
import { DropdownItem } from './models/dropdown-item';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sortOptions: DropdownItem[] = [
    { name: 'first_name', label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'email', label: 'Email' }
  ];

  isLoading: boolean = false;

  isDeleteModeOn: boolean = false;
  deletingUserId: number;
  sortOption: string;
  isAsc: boolean;

  totalPages: number;
  userList: User[] = [];
  // Store a copy for search function
  userListCopy: User[] = [];

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
        this.userListCopy = this.userList.slice();

        this.isLoading = false;
      });
    });
  }

  sortOptionChanged(option: string) {
    // Sort userlist array with provided option
    this.userList = Utils.sortArray(this.userList as [], option, this.isAsc);
    this.sortOption = option;
  }

  sortOrderChanged(isAsc: boolean) {
    this.isAsc = isAsc;

    // If sort option is specified
    if (this.sortOption) {
      // Sort userlist array with provided order
      this.userList = Utils.sortArray(
        this.userList as [],
        this.sortOption,
        isAsc
      );
    }
  }

  search(keyword: string) {
    // Update userlist array
    if (keyword === '') {
      this.userList = this.userListCopy.slice();
    } else {
      this.userList = Utils.searchArray(this.userList, keyword);
    }
  }

  openDeleteModal(id: number) {
    this.isDeleteModeOn = true;
    this.deletingUserId = id;
  }

  closeDeleteModal() {
    this.isDeleteModeOn = false;
  }

  confirmDelete() {
    this.isLoading = true;
    // Delete user in database
    this.usersService.deleteUser(this.deletingUserId).then((res) => {
      this.isLoading = false;

      // Remove it from local array
      const index = this.userList
        .map((el) => el.id)
        .indexOf(this.deletingUserId);
      this.userList.splice(index, 1);
    });

    this.isDeleteModeOn = false;
  }
}
