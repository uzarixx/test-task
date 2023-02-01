import $api from './http';


export default class CardService {
  static async createCard(limit: number, walletName: string) {
    return $api.post('/create-wallet', {
      limit, walletName
    })
  }

  static async getCards() {
    return $api.get('/get-cards')
  }
}