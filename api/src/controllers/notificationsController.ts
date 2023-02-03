import { Request, Response } from 'express';
import {getCountNotifications} from '../db/notifications';


const NotificationsController = {
  getCountNotifications: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const { count } = await getCountNotifications(id);
    res.json(count);
  },
}

export default NotificationsController;