import React, { Component } from 'react';
import { Page } from '~/components/Page';
import { SignUp as SignUpForm } from '~/views/Form';

class SignUp extends Component {
  render() {
    return (
      <Page center verticalCenter>
        <SignUpForm size="md" />
      </Page>
    );
  }
}

export default SignUp;
