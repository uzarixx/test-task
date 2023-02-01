import $api from './http';


export default class TransactionsService {
  static async createWallet(limit: number, walletName: string) {
    return $api.post('/create-wallet', {
      limit, walletName
    })
  }

  static async getTransactions() {
    return $api.get('/get-transactions')
  }
}