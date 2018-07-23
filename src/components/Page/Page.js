import React, { Component } from 'react';
import classnames from 'classnames';

class Page extends Component {
  render() {
    const { className, center, ...props } = this.props;
    const classes = classnames(
      className,
      `container-fluid d-flex align-items-center${
        center ? ' justify-content-center' : ''
      }`
    );
    return <div className={classes} {...props} />;
  }
}

export default Page;
