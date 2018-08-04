import React, { Component } from 'react';
import classnames from 'classnames';

class Page extends Component {
  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames(className, 'container-fluid')} {...props} />
    );
  }
}

export default Page;
