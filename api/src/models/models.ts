import { User } from './user';
import {Wallet} from './wallet';

User.hasMany(Wallet, {foreignKey: 'userId'})


export const models = {
  User,
  Wallet
};