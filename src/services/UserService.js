import { API_ENDPOINT } from '~/constants';
import request from '~/utils/request';

class UserService {
  constructor() {
    this.url = `${API_ENDPOINT}/users`;
  }

  async getByUsername(username) {
    const result = await request({ url: this.url, params: { username } });
    return result;
  }

  async getCurrentUser() {
    const { user } = await request({ url: `${this.url}/profile` });
    return user;
  }

  async login(data) {
    return await request({
      url: `${this.url}/login`,
      method: 'post',
      data
    });
  }

  async register(data) {
    return await request({
      url: `${this.url}/register`,
      method: 'post',
      data
    });
  }
}

export default UserService;
