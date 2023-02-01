import sequelize from '../db/connection'
import {DataTypes} from 'sequelize'

export const Transaction = sequelize.define('transactions', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  userId: {type: DataTypes.INTEGER},
  amount: {type: DataTypes.INTEGER},
  status: {type: DataTypes.BOOLEAN},
  name: {type: DataTypes.STRING},
  minus: {type: DataTypes.BOOLEAN}
})