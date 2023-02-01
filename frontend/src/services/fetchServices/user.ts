import $api from './http';


export default class UserService {
  static async getAuthUser() {
    return $api.get('/auth-user')
  }

}