import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../utils/db.js'


const Type = sequelize.define('Type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Type
