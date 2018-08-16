import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { translate, Trans } from 'react-i18next';

import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';

import { VIEW_SIZE } from '~/constants';

import fields from './fields';

@withRouter
@translate()
@inject('UserStore')
@observer
class SignIn extends Component {
  @observable
  email = '';

  @observable
  password = '';

  async handleSubmit(e) {
    e.preventDefault();

    await this.props.UserStore.signIn({
      email: this.email,
      password: this.password
    });

    this.props.history.push('/');
  }

  handleChange = name => e => {
    this[name] = e.target.value;
  };

  render() {
    const { t } = this.props;

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
        <h3 className="mb-3 text-center">
          <Trans i18nKey="signIn.title">
            <strong>GXC</strong>
          </Trans>
        </h3>
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
          {t('signIn.submit')}
        </Button>
        <p className="mt-3">
          <Trans i18nKey="signIn.wantSignUp">
            <Link to="/signup">Sign up</Link>
          </Trans>
        </p>
      </Form>
    );
  }
}

export default SignIn;
