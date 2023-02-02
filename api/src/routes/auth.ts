import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import authController from '../controllers/authController';
import authUser from '../middlewares/authMiddlewate';
import { validationLogin, validationSignUp } from '../service/validations/authValidations';

export const authRouter = Router();

authRouter.post('/signup', ...validationSignUp, handleErrorMiddleware(authController.signUp));
authRouter.post('/login', ...validationLogin, handleErrorMiddleware(authController.login));
authRouter.get('/auth-user', authUser, handleErrorMiddleware(authController.authUser));