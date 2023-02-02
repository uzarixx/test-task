import { Wallet } from '../models/wallet';
import { Op } from 'sequelize';


interface ICreateWallet {
  userId: number;
  balance: number;
  limit: number;
  walletName: string;
}

export const createWallet = async (data: ICreateWallet): Promise<any> => {
  return await Wallet.create({ ...data });
};

export const getCountWallets = async (userId: number): Promise<any> => {
  return await Wallet.findAndCountAll({ where: { userId } });
};

export const getAllWallets = async (userId: number): Promise<any> => {
  return await Wallet.findAll({ where: { userId }, order: [['id', 'DESC']] });
};


export const getWallet = async (userId: number, walletId: number): Promise<any> => {
  return await Wallet.findOne({ where: { id: walletId } });
};

export const updateWalletBalance = async ({ walletId, balance, userId }): Promise<any> => {
  await Wallet.update({ balance }, { where: { id: walletId } });
  const wallet: any = await Wallet.findOne({ where: { [Op.or]: [{ userId }, { id: walletId }] } });
  if (wallet.balance === wallet.limit) return await Wallet.destroy({ where: { id: wallet.id } });
  return;
};