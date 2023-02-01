import { User } from './user';
import { Wallet } from './wallet';
import { UserCard } from './userCard';
import { Transaction } from './transaction';

User.hasMany(Wallet, { foreignKey: 'userId' });
User.hasMany(UserCard, { foreignKey: 'userId' });
User.hasMany(Transaction, { foreignKey: 'userId' });


export const models = {
  User,
  Wallet,
  UserCard,
  Transaction,
};