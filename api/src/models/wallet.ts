import sequelize from '../db/connection'
import {DataTypes} from 'sequelize'

export const Wallet = sequelize.define('wallet', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  userId: {type: DataTypes.INTEGER},
  balance: {type: DataTypes.INTEGER},
  limit: {type: DataTypes.INTEGER},
  walletName: {type: DataTypes.STRING},
})