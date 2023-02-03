import { Op } from 'sequelize';
import { Transaction } from '../models/transaction';
import { Notifications } from '../models/notifications';

export const createTransaction = async ({ userId, amount, status, name, minus, userBalance }) => {
  await Notifications.create({ userId, message: 'You have new notification' });
  return await Transaction.create({ userId, amount, status, name, minus, userBalance });
};

export const getAllTransactions = async (id: number, page: number, limit: number, name: string): Promise<any> => {
  const notifications = await Notifications.findAll({ where: { userId: id }, attributes: ['id'] });
  await Notifications.destroy({where: {id: notifications.map((el) => el.dataValues.id)}})
  const limitValue = limit || 10;
  return await Transaction.findAndCountAll({
    ...(name ? { where: { userId: id, name: { [Op.like]: `%${name}%` } } } : { where: { userId: id } }),
    order: [['id', 'DESC']],
    limit: limit || 10,
    offset: (Number(page) || 1) * Number(limitValue) - Number(limitValue),
  });
};

export const getAllBalances = async (id: number): Promise<any> => {
  return await Transaction.findAll({
    where: { userId: id },
    attributes: ['amount', 'createdAt', 'minus'],
    order: [['createdAt', 'ASC']],
  });
};