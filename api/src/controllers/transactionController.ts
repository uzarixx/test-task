import { Request, Response } from 'express';
import { createTransaction, getAllBalances, getAllTransactions } from '../db/transaction';
import { getAllCards } from '../db/userCard';
import { updateUserBalance } from '../db/user';

interface Query {
  page: string;
  limit: string;
  name: string;
}


const TransactionController = {
  createRequestPayment: async (req: Request | any, res: Response) => {
    const { amount } = req.body;
    const { id, balance } = req.user;
    const cards = await getAllCards({ userId: id });
    if (!cards) return res.status(500).json('You do not have a bank card');
    const newBalance = Number(balance) + Number(amount);
    await createTransaction({
      userId: id,
      amount,
      status: true,
      name: 'Balance replenishment',
      minus: false,
      userBalance: newBalance,
    });
    await updateUserBalance(id, newBalance);
    res.json('success');
  },
  getTransactions: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const { limit, page, name } = req.query as Query;
    const transactions = await getAllTransactions(id, Number(page) || 1, Number(limit) || 10, name);
    res.json(transactions);
  },
  getAllTransactionsBalance: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const transactions = await getAllBalances(id)
    res.json(transactions)
  },

};


export default TransactionController;