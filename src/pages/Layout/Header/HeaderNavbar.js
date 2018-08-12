import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItems } from '~/components/Nav';
import { Logo } from '~/components/Logo';
import Auth from '~/views/Auth';

const navList = [
  {
    to: '/signup',
    key: 'SignUp'
  },
  {
    to: '/SignIn',
    key: 'SignIn'
  }
];

class HeaderNavbar extends Component {
  render() {
    return (
      <Navbar color="light" light expand>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavItems navList={navList} />
        <Auth
          renderSignedOut={() => 'signed out'}
          renderSignedIn={user => user.email}
        />
      </Navbar>
    );
  }
}

export default HeaderNavbar;
