import request from '~/utils/request';

class UserService {
  constructor() {
    this.url = '/users';
  }

  async getByUsername(username) {
    const result = await request({ url: this.url, params: { username } });
    return result;
  }

  async getCurrentUser() {
    return await request({ url: `${this.url}/profile` });
  }

  async signin(data) {
    return await request({
      url: `${this.url}/login`,
      method: 'post',
      data
    });
  }

  async signup(data) {
    return await request({
      url: `${this.url}/register`,
      method: 'post',
      data
    });
  }
}

export default UserService;
