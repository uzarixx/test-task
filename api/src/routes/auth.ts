import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import authController from '../controllers/authController';

export const authRouter = Router();

authRouter.post('/signup', handleErrorMiddleware(authController.signUp))