const fields = {
  email: {
    type: 'email',
    name: 'email',
    required: true,
    maxLength: 50,
    autoFocus: true
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    minLength: 8,
    pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*s).*$',
    title: 'lower case, upper case, digit',
    autoComplete: 'current-password'
  }
};

export default fields;
