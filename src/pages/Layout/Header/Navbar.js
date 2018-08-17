import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import {
  Navbar as BootstrapNavbar,
  NavbarBrand,
  Nav,
  NavItem
} from '~/components/Nav';
import withAuth from '~/utils/auth/withAuth';
import { Logo } from '~/components/Logo';
import LanguageNavItem from './LanguageNavItem';
import styles from './Navbar.scss';

const cx = classNames.bind(styles);

@withAuth
@translate()
class Navbar extends Component {
  render() {
    const { isSignIn, currentUser } = this.props.auth;
    const { t } = this.props;

    const AuthNavItem = () =>
      isSignIn ? (
        <NavItem>{currentUser.email}</NavItem>
      ) : (
        <React.Fragment>
          <NavItem to="/signup">{t('nav.signUp')}</NavItem>
          <NavItem to="/signin">{t('nav.signIn')}</NavItem>
        </React.Fragment>
      );

    return (
      <BootstrapNavbar className={cx('navbar', 'border-bottom')} light expand>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <Nav className="ml-auto" horizontal="horizontal" navbar>
          <AuthNavItem />
          <LanguageNavItem />
        </Nav>
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
