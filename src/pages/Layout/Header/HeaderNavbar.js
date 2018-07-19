import React, { Component } from 'react';
import { Navbar, NavbarBrand, Logo, NavItems } from '~/components/Nav';

const navList = [
  {
    to: '/about',
    key: 'About'
  },
  {
    to: '/support',
    key: 'Support'
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
      </Navbar>
    );
  }
}

export default HeaderNavbar;
