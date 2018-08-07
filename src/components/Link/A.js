import React, { Component } from 'react';
import ReactGA from 'react-ga';

class A extends Component {
  handleClick() {
    ReactGA.ga('send', 'event', 'anchor', 'link', this.props.href || '');

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { to, children, title, ...props } = this.props;
    let anchorTitle = title;

    if (typeof children === 'string') {
      anchorTitle = children;
    }

    return (
      <a
        rel="noopener noreferrer"
        title={anchorTitle}
        onClick={this.handleClick.bind(this)}
        {...props}
      >
        {children}
      </a>
    );
  }
}

export default A;
