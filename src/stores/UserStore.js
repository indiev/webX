import { observable, action } from 'mobx';

import UserService from '~/services/UserService';
import { ACCESS_TOKEN } from '~/constants';

class UserStore {
  constructor() {
    this.userService = new UserService();
  }

  @observable
  token = localStorage.getItem(ACCESS_TOKEN);

  @observable
  currentUser = {};

  @action
  setToken(token) {
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
    } else {
      localStorage.removeItem(ACCESS_TOKEN);
    }
    this.token = token;
  }

  @action
  setUser(user = {}) {
    this.currentUser = user;
  }

  @action
  async getCurrentUser() {
    try {
      const user = await this.userService.getCurrentUser();
      this.setUser(user);
    } catch (error) {
      // when token expired
      this.signout();
    }
  }

  @action
  signIn({ email, password }) {
    return this.userService
      .signIn({ email, password })
      .then(({ user, token }) => {
        this.setUser(user);
        this.setToken(token.accessToken);
      });
  }

  @action
  signOut() {
    this.setToken(null);
    this.setUser(null);

    return Promise.resolve();
  }

  @action
  signUp({ username, email, password }) {
    return this.userService
      .signUp({
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
