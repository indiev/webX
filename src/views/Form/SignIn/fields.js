const fields = [
  {
    type: 'email',
    name: 'email',
    rules: {
      required: true,
      maxLength: 50
    },
    options: {
      autoFocus: true
    }
  },
  {
    type: 'password',
    name: 'password',
    rules: {
      required: true,
      minLength: 8,
      pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*s).*$',
      title: 'lower case, upper case, digit'
    },
    options: {
      autoComplete: 'current-password'
    }
  }
];

export default fields;
