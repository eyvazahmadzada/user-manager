export class Api {
  private static _baseUrl = 'https://reqres.in/api';

  private static _getUrl(url: string) {
    return `${this._baseUrl}/${url}`;
  }

  // User methods
  public static getUsers(page: string) {
    return this._getUrl(`users?page=${page}`);
  }
}
