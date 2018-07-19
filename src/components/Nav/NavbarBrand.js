import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarBrand as BootstrapNavbarBrand } from 'reactstrap';

class NavbarBrand extends Component {
  render() {
    const { tag = NavLink, to = '/', ...props } = this.props;
    return <BootstrapNavbarBrand tag={tag} to={to} {...props} />;
  }
}

export default NavbarBrand;
