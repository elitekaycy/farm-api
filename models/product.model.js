import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../utils/db.js';

import Type from './type.model.js';
import Farmer from './farmer.model.js';


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB('long')
  },
});

Product.belongsTo(Type, {
  foreignKey: 'typeId',
  as: 'type',
});

Product.belongsTo(Farmer, {
  foreignKey: 'farmerId',
  as: 'farmer',
});

export default Product
