import React, { Component } from 'react';
import { Button as BootstrapButton } from 'reactstrap';

class Button extends Component {
  onClick() {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    return <BootstrapButton onClick={() => this.onClick} />;
  }
}

export default Button;
