import React, { Component } from 'react';
import { Page } from '~/components/Page';
import { SignIn as SignInForm } from '~/views/Form';

class SignIn extends Component {
  render() {
    return (
      <Page center>
        <SignInForm size="md" />
      </Page>
    );
  }
}

export default SignIn;
