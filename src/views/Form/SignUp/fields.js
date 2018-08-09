const fields = {
  username: {
    type: 'text',
    name: 'username',
    required: true,
    minLength: 4,
    maxLength: 20,
    pattern: '(?=.*[a-z])(?=.*[0-9])',
    title: 'lower case, digit'
  },
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
    autoComplete: 'new-password'
  }
};

export default fields;
