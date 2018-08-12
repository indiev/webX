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
class SignIn extends Component {
  @observable
  email = '';

  @observable
  password = '';

  async handleSubmit(e) {
    e.preventDefault();

    await this.props.UserStore.signin({
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
        <h3 className="mb-3 text-center font-weight-bold">Sign in</h3>
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
          Sign in
        </Button>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </Form>
    );
  }
}

export default SignIn;
