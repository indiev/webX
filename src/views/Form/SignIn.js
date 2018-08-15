import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

import { Icon } from '~/components/Logo';
import { Button } from '~/components/Button';
import { Form, FormInput } from '~/components/Form';
import { VIEW_SIZE } from '~/constants';

@translate()
class SignIn extends Component {
  render() {
    const { t } = this.props;

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
        <h3 className="mb-3 text-center">
          <Trans i18nKey="signIn.title">
            <strong>GXC</strong>
          </Trans>
        </h3>
        <FormInput
          type="email"
          name={t('signIn.email')}
          maxLength="50"
          required
          autoFocus
        />
        <FormInput
          type="password"
          name={t('signIn.password')}
          autoComplete="current-password"
          minLength="8"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).*$"
          title="lower case, upper case, digit"
        />
        <Button color="blue" block>
          {t('signIn.submit')}
        </Button>
      </Form>
    );
  }
}

export default SignIn;
