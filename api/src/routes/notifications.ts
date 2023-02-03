import { Router } from 'express';
import handleErrorMiddleware from '../middlewares/handleErrorMiddleware';
import authUser from '../middlewares/authMiddlewate';
import notificationsController from '../controllers/notificationsController';

export const notificationsRouter = Router();

notificationsRouter.get('/get-count-notifications', authUser, handleErrorMiddleware(notificationsController.getCountNotifications));