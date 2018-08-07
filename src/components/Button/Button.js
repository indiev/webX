import React, { Component } from 'react';
import { Button as BootstrapButton } from 'reactstrap';
import ReactGA from 'react-ga';

import { COMPONENT_COLOR } from '~/constants';

class Button extends Component {
  handleClick(e) {
    const { children, onClick } = this.props;
    const label = typeof children === 'string' ? children : '';

    ReactGA.ga('send', 'event', 'click', 'button', label);

    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const { color, ...props } = this.props;
    const buttonColor = color
      ? COMPONENT_COLOR[color.toUpperCase()]
      : undefined;

    return (
      <BootstrapButton
        color={buttonColor}
        onClick={this.handleClick.bind(this)}
        {...props}
      />
    );
  }
}

export default Button;
