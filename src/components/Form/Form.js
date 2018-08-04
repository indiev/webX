import React, { Component } from 'react';
import { Form as BootstrapForm } from 'reactstrap';

class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    }
  }

  render() {
    return (
      <BootstrapForm onSubmit={this.handleSubmit.bind(this)} {...this.props} />
    );
  }
}

export default Form;
