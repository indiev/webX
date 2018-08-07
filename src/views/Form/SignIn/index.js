import React, { Component } from 'react';
import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';
import { VIEW_SIZE } from '~/constants';
import { UserService } from '~/services';
import fields from './fields';

class SignIn extends Component {
  componentDidMount() {
    this.getUserByUsername();
  }
  getUserByUsername() {
    const userService = new UserService();
    const result = userService.getByUsername('Bret');
    console.log(result);
  }

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
        <h3 className="mb-3 text-center font-weight-bold">Sign In</h3>
        {fields.map(field => (
          <FormInput
            type={field.type}
            name={field.name}
            {...field.options}
            {...field.rules}
          />
        ))}
        <Button color="blue" block>
          Sign In
        </Button>
      </Form>
    );
  }
}

export default SignIn;
