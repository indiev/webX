import React, { Component } from 'react';
import { Button as BootstrapButton } from 'reactstrap';
import ReactGA from 'react-ga';
import { COMPONENT_COLOR } from '~/constants';

class Button extends Component {
  onClick() {
    const { children, tag: Tag, href, onClick } = this.props;

    const label = typeof children === 'string' ? children : '';
    const type = href && Tag === 'a' ? 'anchor' : 'button';

    ReactGA.ga('send', 'event', 'click', type, label);
    if (onClick) {
      onClick();
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
        onClick={() => this.onClick}
        {...props}
      />
    );
  }
}

export default Button;
