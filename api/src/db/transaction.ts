import { Transaction } from '../models/transaction';

export const createTransaction = async ({ userId, amount, status, name, minus }) => {
  return await Transaction.create({ userId, amount, status, name, minus });
};

export const getAllTransactions = async (id: number): Promise<any> => {
  return await Transaction.findAndCountAll({where: {userId: id}})
}