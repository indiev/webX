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
    type: 'text',
    name: 'username',
    rules: {
      required: true,
      minLength: 4,
      maxLength: 20,
      pattern: '(?=.*d)(?=.*[a-z])(?=.*[0-9])',
      title: 'lower case, digit'
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
      autoComplete: 'new-password'
    }
  }
];

export default fields;
