import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import authController from '../controllers/authController';
import authUser from '../middlewares/authMiddlewate';

export const authRouter = Router();

authRouter.post('/signup', handleErrorMiddleware(authController.signUp))
authRouter.post('/login', handleErrorMiddleware(authController.login))
authRouter.get('/auth-user', authUser, handleErrorMiddleware(authController.authUser))