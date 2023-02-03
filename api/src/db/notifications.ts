import { Notifications } from '../models/notifications';


export const getCountNotifications = async (id: number): Promise<any> => {
return Notifications.findAndCountAll({where: {userId: id}})
};