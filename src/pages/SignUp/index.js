import React, { Component } from 'react';
import { Page } from '~/components/Page';
import { SignUp as SignUpForm } from '~/views/Form';

class SignUp extends Component {
  render() {
    return (
      <Page>
        <div className="d-flex justify-content-center">
          <SignUpForm size="md" />
        </div>
      </Page>
    );
  }
}

export default SignUp;
