import { User } from '../models/user.model';

export interface UsersData {
  total_pages: number;
  data: User[];
}

export interface UserData {
  data: User;
}
