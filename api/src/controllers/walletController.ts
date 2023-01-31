import { Request, Response } from 'express';
import { createWallet, getAllWallets, getCountWallets, getWallet } from '../db/wallet';


const WalletController = {
  createWallet: async (req: Request | any, res: Response) => {
    const { limit, walletName } = req.body;
    const { id } = req.user;
    const {count} = await getCountWallets(id);
    if (count >= 6) return res.status(500).json('you have limit to create wallet')
    const response = await createWallet({ limit, walletName, userId: id, balance: 0 });
    res.json(response);
  },
  updateBalanceWallet: async (req: Request | any, res: Response) => {
    const { value, walletId } = req.body;
    const { id } = req.user;
    const wallet = await getWallet(id, walletId);
  },
  getWallets: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const wallet = await getAllWallets(id);
    res.json(wallet);
  },
};


export default WalletController;