import { Request, Response } from 'express';
import { createTransaction, getAllTransactions } from '../db/transaction';
import { getAllCards } from '../db/userCard';
import { updateUserBalance } from '../db/user';


const TransactionController = {
  createRequestPayment: async (req: Request | any, res: Response) => {
    const { amount } = req.body;
    const { id, balance } = req.user;
    const cards = await getAllCards({ userId: id });
    if (!cards) return res.status(500).json('You do not have a bank card');
    await createTransaction({ userId: id, amount, status: true, name: 'Balance replenishment', minus: false });
    const newBalance = balance + Number(amount);
    await updateUserBalance(id, newBalance);
    res.json('success');
  },
  getTransactions: async (req: Request | any, res: Response) => {
    const {id} = req.user
    const transactions = await getAllTransactions(id)
    res.json(transactions)
  }
};


export default TransactionController;