import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';

import { VIEW_SIZE } from '~/constants';

import fields from './fields';

@withRouter
@inject('UserStore')
@observer
class SignUp extends Component {
  @observable
  username = '';

  @observable
  email = '';

  @observable
  password = '';

  async handleSubmit(e) {
    e.preventDefault();

    await this.props.UserStore.signup({
      username: this.username,
      email: this.email,
      password: this.password
    });

    this.props.history.push('/');
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
        <h3 className="mb-3 text-center font-weight-bold">Sign up</h3>
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
          Sign up
        </Button>
        <p className="mt-3">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Form>
    );
  }
}

export default SignUp;
