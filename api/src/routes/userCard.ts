import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import userCardController from '../controllers/userCardController';
import authUser from '../middlewares/authMiddlewate';

export const userCardRouter = Router();

userCardRouter.post('/create-card', authUser, handleErrorMiddleware(userCardController.createCard));
userCardRouter.get('/get-cards', authUser, handleErrorMiddleware(userCardController.getCards));