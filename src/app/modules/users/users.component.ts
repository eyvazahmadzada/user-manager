import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sortOptions: string[] = ['First Name', 'Last Name', 'Email'];

  userList: User[] = [
    {
      id: 1,
      firstName: 'Eyvaz',
      lastName: 'Ahmadzada',
      email: 'test@test.com'
    },
    {
      id: 1,
      firstName: 'Eyvaz',
      lastName: 'Ahmadzada',
      email: 'test@test.com'
    },
    {
      id: 1,
      firstName: 'Eyvaz',
      lastName: 'Ahmadzada',
      email: 'test@test.com'
    },
    {
      id: 1,
      firstName: 'Eyvaz',
      lastName: 'Ahmadzada',
      email: 'test@test.com'
    },
    {
      id: 1,
      firstName: 'Eyvaz',
      lastName: 'Ahmadzada',
      email: 'test@test.com'
    },
    { id: 1, firstName: 'Eyvaz', lastName: 'Ahmadzada', email: 'test@test.com' }
  ];

  constructor() {}

  ngOnInit() {
    console.log('test');
  }

  openDeleteModal(id: number) {
    console.log(id);
  }
}
