import { API_ENDPOINT } from '~/constants';
class UserService {
  constructor() {
    this.baseUrl = `${API_ENDPOINT}/users`;
  }

  async getByUsername(username) {
    const getByUsernameUrl = `${this.baseUrl}?username=${username}`;
    const result = await fetch(getByUsernameUrl);
    return result;
  }
}

export default UserService;
