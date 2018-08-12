// eslint-disable-next-line
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('UserStore')
@observer
class Auth extends Component {
  render() {
    const {
      renderSignedIn = () => null,
      renderSignedOut = () => null
    } = this.props;

    const { token, currentUser, signIn, signOut } = this.props.UserStore;

    return token
      ? renderSignedIn(currentUser, signOut)
      : renderSignedOut(signIn);
  }
}
export default Auth;
