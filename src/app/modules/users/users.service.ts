import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Api } from 'src/app/config/api';
import { UserData, UsersData } from './interfaces/users';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  public async getUsers(page: number) {
    const response = await this.httpClient
      .get<UsersData>(Api.getUsers(page))
      .toPromise();
    return response;
  }

  public async createUser(user: User) {
    const response = await this.httpClient
      .post(Api.createUser(), user)
      .toPromise();
    return response;
  }

  public async getUser(id: number) {
    const response = await this.httpClient
      .get<UserData>(Api.singleUser(id))
      .toPromise();
    return response;
  }

  public async updateUser(user: User) {
    const response = await this.httpClient
      .put(Api.singleUser(user.id), user)
      .toPromise();
    return response;
  }

  public async deleteUser(user: User) {
    const response = await this.httpClient
      .delete(Api.singleUser(user.id))
      .toPromise();
    return response;
  }
}
