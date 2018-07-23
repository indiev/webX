import React, { Component } from 'react';
import { Image } from '../Image';

class Icon extends Component {
  render() {
    return <Image src="logo/logo_icon.svg" {...this.props} />;
  }
}

export default Icon;
