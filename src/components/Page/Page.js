import React, { Component } from 'react';
import classnames from 'classnames';

class Page extends Component {
  render() {
    const { className, row, center, verticalCenter, ...props } = this.props;

    return (
      <div
        className={classnames(
          className,
          'container-fluid',
          'd-flex flex-fill',
          row ? 'flex-row' : 'flex-column',
          center && 'align-items-center',
          verticalCenter && 'justify-content-center'
        )}
        {...props}
      />
    );
  }
}

export default Page;
