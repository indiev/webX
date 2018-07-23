import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import uniqid from 'uniqid';

class FormInput extends Component {
  render() {
    const {
      type = 'text',
      name = '',
      id,
      invalid,
      description,
      feedback,
      placeholder,
      autoComplete,
      ...props
    } = this.props;
    const inputID = id ? id : uniqid(`${name}-`);
    return (
      <FormGroup>
        <Label for={inputID} className="text-capitalize">
          {name}
        </Label>
        <Input
          type={type}
          name={name}
          id={inputID}
          placeholder={placeholder ? placeholder : name}
          invalid={invalid}
          autoComplete={autoComplete ? autoComplete : name}
          {...props}
        />
        {description && <FormText>{description}</FormText>}
        {invalid && (
          <FormFeedback>
            {feedback ? feedback : `The ${name} you entered is invalid`}
          </FormFeedback>
        )}
      </FormGroup>
    );
  }
}

export default FormInput;
