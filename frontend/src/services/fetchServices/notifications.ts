import $api from './http';


export default class NotificationsService {
  static async getCountNotifications() {
    return $api.get('/get-count-notifications');
  }
}