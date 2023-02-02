import { User } from '../models/user';

export const getUserByEmail = async (email: string): Promise<any> => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (
  {
    userName,
    userLastName,
    email,
    password,
  }: { userName: string, userLastName: string, email: string, password: string }): Promise<any> => {
  return await User.create({ userName, userLastName, email, password });
};

export const getUserById = async (id: number): Promise<any> => {
  return await User.findOne({where: {id}, attributes: ['userName', 'userLastName', 'email', 'balance', 'id']})
}

export const updateUserBalance = async (id: number, balance: number): Promise<any> => {
  return await User.update({balance}, {where: {id}})
}

