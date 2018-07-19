import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

class Link extends Component {
  render() {
    return <RouterLink to={this.props.link} {...this.props} />;
  }
}

export default Link;
