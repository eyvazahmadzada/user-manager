export class Api {
  private static _baseUrl = 'https://reqres.in/api';

  private static _getUrl(url: string) {
    return `${this._baseUrl}/${url}?delay=1`;
  }

  // User methods
  public static getUsers(page: number) {
    return this._getUrl(`users?page=${page}`);
  }

  public static createUser() {
    return this._getUrl(`users`);
  }

  public static singleUser(id: number) {
    return this._getUrl(`users/${id}`);
  }
}
