import Model from './Model';

class User extends Model {
  constructor(params) {
    super(params);
    this.id = params.id || null;
    this.username = params.username || '';
    this.email = params.email || '';
    this.password = params.password || '';
  }
}

export default User;
