import React, { Component } from 'react';
import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';
import { VIEW_SIZE } from '~/constants';

class SignUp extends Component {
  render() {
    return (
      <Form
        className={
          this.props.size
            ? VIEW_SIZE[this.props.size.toUpperCase()]
            : VIEW_SIZE.MD
        }
      >
        <div className="text-center mb-3">
          <Icon style={{ height: '4rem' }} />
        </div>
        <h3 className="mb-3 text-center font-weight-bold">Sign Up</h3>
        <FormInput
          type="email"
          name="email"
          maxLength="50"
          required
          autoFocus
        />
        <FormInput
          type="text"
          name="username"
          minLength="4"
          maxLength="20"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[0-9])"
          title="lower case, digit"
        />
        <FormInput
          type="password"
          name="password"
          autoComplete="new-password"
          minLength="8"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).*$"
          title="lower case, upper case, digit"
        />
        <Button type="submit" color="blue" block>
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUp;
