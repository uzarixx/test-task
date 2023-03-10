import $api from './http';


export default class WalletsService {
  static async createWallet(limit: number, walletName: string) {
    return $api.post('/create-wallet', {
      limit, walletName,
    });
  }

  static async getWallets() {
    return $api.get('/get-wallets');
  }

  static async updateBalanceWallet(walletId: number, amount: string) {
    return $api.post('/update-wallet-balance', {
      walletId, amount,
    });
  }
}