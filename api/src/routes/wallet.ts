import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import walletController from '../controllers/walletController';
import authUser from '../middlewares/authMiddlewate';

export const walletRouter = Router();

walletRouter.post('/create-wallet', authUser, handleErrorMiddleware(walletController.createWallet));
walletRouter.get('/get-wallets', authUser, handleErrorMiddleware(walletController.getWallets))