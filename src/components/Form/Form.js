import React, { Component } from 'react';
import { Form as BootstrapForm } from 'reactstrap';

class Form extends Component {
  render() {
    return <BootstrapForm {...this.props} />;
  }
}

export default Form;
