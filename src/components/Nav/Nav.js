import React, { Component } from 'react';
import { Nav as BootstrapNav } from 'reactstrap';

class Nav extends Component {
  render() {
    return <BootstrapNav {...this.props} />;
  }
}

export default Nav;
