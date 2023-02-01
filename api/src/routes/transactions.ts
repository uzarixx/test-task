import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import authUser from '../middlewares/authMiddlewate';
import transactionController from '../controllers/transactionController';

export const transactionRouter = Router();

transactionRouter.post('/create-request-payment', authUser, handleErrorMiddleware(transactionController.createRequestPayment));
transactionRouter.get('/get-transactions', authUser, handleErrorMiddleware(transactionController.getTransactions))