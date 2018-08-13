import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames/bind';

import {
  Navbar as BootstrapNavbar,
  NavbarBrand,
  Nav,
  NavItem
} from '~/components/Nav';
import { Logo } from '~/components/Logo';
import LanguageNavItem from './LanguageNavItem';
import styles from './Navbar.scss';

const cx = classNames.bind(styles);

@translate()
class Navbar extends Component {
  render() {
    const { t } = this.props;

    const navList = [
      {
        to: '/signup',
        key: t('nav.signUp')
      },
      {
        to: '/signin',
        key: t('nav.signIn')
      }
    ];

    return (
      <BootstrapNavbar className={cx('navbar', 'border-bottom')} light expand>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <Nav className="ml-auto" horizontal="horizontal" navbar>
          {navList.map(nav => (
            <NavItem {...nav}>{nav.key}</NavItem>
          ))}
          <LanguageNavItem />
        </Nav>
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
