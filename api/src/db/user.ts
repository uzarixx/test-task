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