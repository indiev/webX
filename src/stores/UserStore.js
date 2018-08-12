import { observable, action } from 'mobx';

import UserService from '~/services/UserService';

class UserStore {
  constructor() {
    this.userService = new UserService();
  }

  @observable
  token = localStorage.getItem('jwt');

  @observable
  currentUser = {};

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
  setUser(user = {}) {
    this.currentUser = user;
  }

  @action
  async pullUser() {
    try {
      const user = await this.userService.getCurrentUser();
      this.setUser(user);
    } catch (error) {
      // when token expired
      this.signout();
    }
  }

  @action
  signin({ email, password }) {
    return this.userService
      .signin({ email, password })
      .then(({ user, token }) => {
        this.setUser(user);
        this.setToken(token.accessToken);
      });
  }

  @action
  signout() {
    this.setToken(null);
    this.setUser(null);

    return Promise.resolve();
  }

  @action
  signup({ username, email, password }) {
    return this.userService
      .signup({
        username,
        email,
        password
      })
      .then(({ user, token }) => {
        this.setUser(user);
        this.setToken(token.accessToken);
      });
  }
}

export default new UserStore();
