import sequelize from '../db/connection'
import {DataTypes} from 'sequelize'

export const UserCard = sequelize.define('userCard', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  userId: {type: DataTypes.INTEGER},
  cardNumber: {type: DataTypes.STRING},
  expireDateCard: {type: DataTypes.STRING},
  cvvCard: {type: DataTypes.STRING},
})