import { Request, Response } from 'express';
import { createWallet, getAllWallets, getCountWallets, getWallet, updateWalletBalance } from '../db/wallet';
import { createTransaction } from '../db/transaction';
import { updateUserBalance } from '../db/user';
import { validationResult } from 'express-validator';


const WalletController = {
  createWallet: async (req: Request | any, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: `Validation error` });
    const { limit, walletName } = req.body;
    const { id } = req.user;
    const { count } = await getCountWallets(id);
    if (count >= 6) return res.status(500).json('you have limit to create wallet');
    const response = await createWallet({ limit, walletName, userId: id, balance: 0 });
    res.json(response);
  },
  updateBalanceWallet: async (req: Request | any, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: `Validation error` });
    const { walletId, amount } = req.body;
    const { id, balance } = req.user;
    if (amount > balance) return res.status(500).json('Not enough money in the account');
    const wallet = await getWallet(id, walletId);
    if (!wallet) return res.status(500).json('Wallet is not found');
    if (wallet.balance + Number(amount) > wallet.limit) return res.status(500).json('Too much amount');
    await updateWalletBalance({ walletId, balance: Number(wallet.balance) + Number(amount) });
    await createTransaction({
      userId: id,
      amount,
      status: true,
      name: 'Send to wallet',
      minus: true,
      userBalance: Number(balance) - Number(amount),
    });
    await updateUserBalance(id, Number(balance) - Number(amount));
    res.json('success');
  },
  getWallets: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const wallet = await getAllWallets(id);
    res.json(wallet);
  },
};


export default WalletController;