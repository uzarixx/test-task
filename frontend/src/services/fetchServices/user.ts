import $api from './http';


export default class UserService {
  static async getAuthUser() {
    return $api.get('/auth-user');
  }

  static async login(password: string, email: string) {
    return $api.post('/login', {
      password, email,
    });
  }

  static async register(password: string, email: string, userName: string, userLastName: string) {
    return $api.post('/signup', {
      password, email, userName, userLastName,
    });
  }
}