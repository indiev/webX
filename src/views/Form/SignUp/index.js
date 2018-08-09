import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';

import { VIEW_SIZE } from '~/constants';

import fields from './fields';

@inject('UserStore')
@observer
class SignUp extends Component {
  @observable
  username = '';

  @observable
  email = '';

  @observable
  password = '';

  handleSubmit(e) {
    e.preventDefault();

    this.props.UserStore.register({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  handleChange = name => e => {
    this[name] = e.target.value;
  };

  render() {
    return (
      <Form
        className={
          this.props.size
            ? VIEW_SIZE[this.props.size.toUpperCase()]
            : VIEW_SIZE.MD
        }
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="text-center mb-3">
          <Icon style={{ height: '4rem' }} />
        </div>
        <h3 className="mb-3 text-center font-weight-bold">Register</h3>
        <FormInput
          {...fields.username}
          value={this.username}
          onChange={this.handleChange('username')}
        />
        <FormInput
          {...fields.email}
          value={this.email}
          onChange={this.handleChange('email')}
        />
        <FormInput
          {...fields.password}
          value={this.password}
          onChange={this.handleChange('password')}
        />
        <Button type="submit" color="blue" block>
          Register
        </Button>
      </Form>
    );
  }
}

export default SignUp;
