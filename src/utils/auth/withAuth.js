import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const withAuth = WrappedComponent => {
  class HOC extends Component {
    render() {
      const { token, currentUser, signIn, signOut } = this.props.UserStore;

      const injectProps = {
        isSignIn: Boolean(token),
        currentUser,
        signIn,
        signOut
      };

      return <WrappedComponent auth={injectProps} {...this.props} />;
    }
  }

  return inject('UserStore')(observer(HOC));
};

export default withAuth;
