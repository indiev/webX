import React, { Component } from 'react';
import { Page } from '~/components/Page';
import { SignIn as SignInForm } from '~/views/Form';

class SignIn extends Component {
  render() {
    return (
      <Page>
        <div className="d-flex justify-content-center">
          <SignInForm size="md" />
        </div>
      </Page>
    );
  }
}

export default SignIn;
