import React, { Component } from 'react';
import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';
import { VIEW_SIZE } from '~/constants';
import fields from './fields';

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
        {fields.map(field => (
          <FormInput
            type={field.type}
            name={field.name}
            {...field.options}
            {...field.rules}
          />
        ))}
        <Button type="submit" color="blue" block>
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUp;
