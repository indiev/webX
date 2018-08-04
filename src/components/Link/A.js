import React, { Component } from 'react';
import ReactGA from 'react-ga';

class A extends Component {
  handleClick() {
    const { href } = this.props;

    if (href) {
      ReactGA.ga('send', 'event', 'anchor', 'link', href);
    }
  }

  render() {
    const { to, children, ...props } = this.props;
    let { title } = this.props;

    if (typeof children === 'string') {
      title = children;
    }

    return (
      <a
        rel="noopener noreferrer"
        title={title}
        onClick={this.handleClick.bind(this)}
        {...props}
      >
        {children}
      </a>
    );
  }
}

export default A;
