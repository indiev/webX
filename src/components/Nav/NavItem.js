import React, { Component } from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import {
  NavItem as BootstrapNavItem,
  NavLink as BootstrapNavLink
} from 'reactstrap';
import ReactGA from 'react-ga';
import { A } from '../Link';

class NavItem extends Component {
  onClick(e) {
    const { to = '', children, ...props } = this.props;
    const contents = to || typeof children === 'string' ? children : '';
    ReactGA.ga('send', 'event', 'anchor', 'link', contents);

    if (props.onClick) {
      props.onClick(e);
    }
  }

  render() {
    const { tag, type, ...props } = this.props;
    const C = type === 'anchor' ? A : ReactNavLink;

    return (
      <BootstrapNavItem>
        <BootstrapNavLink
          tag={tag || (this.props.to ? C : undefined)}
          onClick={e => this.onClick(e)}
          {...props}
        />
      </BootstrapNavItem>
    );
  }
}

export default NavItem;
