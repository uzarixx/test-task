import $api from './http';


export default class CardService {
  static async createCard(cardNumber: number, expireDateCard: string, cvvCard: string) {
    return $api.post('/create-card', {
      cardNumber, expireDateCard, cvvCard,
    });
  }

  static async getCards() {
    return $api.get('/get-cards');
  }
}