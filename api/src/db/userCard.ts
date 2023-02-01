import { UserCard } from '../models/userCard';


interface ICreateCard {
  cardNumber: string,
  expireDateCard: string,
  cvvCard: string,
  userId: number;
}

export const createCard = async ({ cardNumber, expireDateCard, cvvCard, userId }: ICreateCard): Promise<any> => {
  await UserCard.create({ cardNumber, expireDateCard, cvvCard, userId });
  return await UserCard.findAll({ where: { userId } });
};

export const getAllCards = async ({ userId }): Promise<any> => {
  return await UserCard.findAndCountAll({ where: { userId } });
};