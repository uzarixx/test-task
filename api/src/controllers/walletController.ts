import { Request, Response } from 'express';
import { createWallet, getAllWallets, getCountWallets, getWallet, updateWalletBalance } from '../db/wallet';
import { createTransaction } from '../db/transaction';


const WalletController = {
  createWallet: async (req: Request | any, res: Response) => {
    const { limit, walletName } = req.body;
    const { id } = req.user;
    const { count } = await getCountWallets(id);
    if (count >= 6) return res.status(500).json('you have limit to create wallet');
    const response = await createWallet({ limit, walletName, userId: id, balance: 0 });
    res.json(response);
  },
  updateBalanceWallet: async (req: Request | any, res: Response) => {
    const { walletId, amount } = req.body;
    console.log(walletId, amount);
    const { id, balance } = req.user;
    if (amount > balance) return res.status(500).json('Not enough money in the account');
    const wallet = await getWallet(id, walletId);
    if (!wallet) return res.status(500).json('Wallet is not found');
    if (wallet.balance + Number(amount) > wallet.limit) return res.status(500).json('Too much amount');
    await updateWalletBalance({ walletId, balance: Number(amount) + wallet.balance, userId: id });
    await createTransaction({ userId: id, amount, status: true, name: 'Send to wallet', minus: true, userBalance: amount - balance });
    res.json('success');
  },
  getWallets: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const wallet = await getAllWallets(id);
    res.json(wallet);
  },
};


export default WalletController;