import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import walletController from '../controllers/walletController';
import authUser from '../middlewares/authMiddlewate';
import { walletCreateValidation, walletUpdateValidation } from '../service/validations/walletValidations';

export const walletRouter = Router();

walletRouter.post('/create-wallet', authUser, ...walletCreateValidation, handleErrorMiddleware(walletController.createWallet));
walletRouter.post('/update-wallet-balance', authUser, ...walletUpdateValidation, handleErrorMiddleware(walletController.updateBalanceWallet))
walletRouter.get('/get-wallets', authUser, handleErrorMiddleware(walletController.getWallets))
