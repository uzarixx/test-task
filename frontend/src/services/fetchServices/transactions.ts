import $api from './http';


export default class TransactionsService {


  static async getTransactions({ page, limit, name }: { page: string, limit: string, name: string }) {
    return $api.get('/get-transactions', {
      params: {
        page: page || '1',
        limit: limit || '10',
        name: name || '',
      },
    });
  }
}