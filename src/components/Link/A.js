import React, { Component } from 'react';
import ReactGA from 'react-ga';

class A extends Component {
  handleClick() {
    const { to = '' } = this.props;
    ReactGA.ga('send', 'event', 'anchor', 'link', to || '');
  }

  render() {
    const { to, children, title, ...props } = this.props;
    let anchorTitle = title;
    if (typeof children === 'string') {
      anchorTitle = children;
    }

    return (
      <a
        onClick={this.handleClick.bind(this)}
        title={anchorTitle}
        rel="noopener noreferrer"
        href={to}
        {...props}
      >
        {children}
      </a>
    );
  }
}

export default A;
