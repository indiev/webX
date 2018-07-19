import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import NavItem from './NavItem';

class NavItems extends Component {
  render() {
    const { navList } = this.props;
    return (
      <Nav className="ml-auto" horizontal="horizontal" navbar>
        {navList && navList.map(nav => <NavItem {...nav}>{nav.key}</NavItem>)}
      </Nav>
    );
  }
}

export default NavItems;
