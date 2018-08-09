import { observable, action } from 'mobx';

import UserService from '~/services/UserService';

class UserStore {
  constructor() {
    this.userService = new UserService();
  }

  @observable
  token = localStorage.getItem('jwt');

  @observable
  currentUser = null;

  @action
  setToken(token) {
    if (token) {
      localStorage.setItem('jwt', token);
    } else {
      localStorage.removeItem('jwt');
    }
    this.token = token;
  }

  @action
  async pullUser() {
    const { user } = await this.userService.getCurrentUser();

    action(() => {
      this.currentUser = user;
    });
  }

  @action
  forgetUser() {
    this.currentUser = null;
  }

  @action
  login({ email, password }) {
    return this.userService
      .login({ email, password })
      .then(({ token }) => this.setToken(token))
      .then(() => this.pullUser());
  }

  @action
  logout() {
    this.setToken(null);
    this.forgetUser();

    return Promise.resolve();
  }

  @action
  register({ email, account, password }) {
    return this.userService
      .register({
        email,
        account,
        password
      })
      .then(({ token }) => this.setToken(token.accessToken))
      .then(() => this.pullUser());
  }
}

export default new UserStore();
