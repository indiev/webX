import React, { Component } from 'react';
import { Image } from '../Image';

class Text extends Component {
  render() {
    return <Image src="logo/logo_text.svg" {...this.props} />;
  }
}

export default Text;
