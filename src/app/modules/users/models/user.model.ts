export class User {
  constructor(
    public avatar: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public id?: number
  ) {}
}
