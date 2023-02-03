import sequelize from '../db/connection'
import {DataTypes} from 'sequelize'

export const Notifications = sequelize.define('notifications', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  userId: {type: DataTypes.INTEGER},
  message: {type: DataTypes.STRING},
})