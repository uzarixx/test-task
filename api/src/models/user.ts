import sequelize from '../db/connection'
import {DataTypes} from 'sequelize'

export const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  userName: {type: DataTypes.STRING},
  userLastName: {type: DataTypes.STRING},
  balance: {type: DataTypes.INTEGER}
})