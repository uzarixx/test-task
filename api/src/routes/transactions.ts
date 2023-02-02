import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import authUser from '../middlewares/authMiddlewate';
import transactionController from '../controllers/transactionController';
import { transactionValidations } from '../service/validations/transactionValidations';

export const transactionRouter = Router();

transactionRouter.post('/create-request-payment', authUser, ...transactionValidations, handleErrorMiddleware(transactionController.createRequestPayment));
transactionRouter.get('/get-transactions', authUser, handleErrorMiddleware(transactionController.getTransactions));
transactionRouter.get('/get-balances', authUser, handleErrorMiddleware(transactionController.getAllTransactionsBalance));