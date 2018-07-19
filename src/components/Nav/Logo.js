import React, { Component, Fragment } from 'react';
import { Image } from '../Image';

class Logo extends Component {
  render() {
    return (
      <Fragment>
        <Image className="mr-1 logo" src="logo/logo_icon.svg" />
        <Image className="logo-text" src="logo/logo_text.svg" />
      </Fragment>
    );
  }
}

export default Logo;
