import { User } from './user';
import { Wallet } from './wallet';
import { UserCard } from './userCard';

User.hasMany(Wallet, { foreignKey: 'userId' });
User.hasMany(UserCard, { foreignKey: 'userId' });

export const models = {
  User,
  Wallet,
  UserCard,
};