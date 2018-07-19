import React, { Component } from 'react';
import { Navbar as BootstrapNavbar } from 'reactstrap';

class Navbar extends Component {
  render() {
    return <BootstrapNavbar {...this.props} />;
  }
}

export default Navbar;
