import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItems } from '~/components/Nav';
import { Logo } from '~/components/Logo';
import withAuth from '~/utils/auth/withAuth';

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

@withAuth
class HeaderNavbar extends Component {
  render() {
    const { isSignIn, currentUser } = this.props.auth;

    return (
      <Navbar color="light" light expand>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavItems navList={navList} />
        {isSignIn ? JSON.stringify(currentUser) : 'not signed in'}
      </Navbar>
    );
  }
}

export default HeaderNavbar;
