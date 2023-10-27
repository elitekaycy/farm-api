import sequelize from "../utils/db.js";
import { Sequelize, DataTypes } from "sequelize";
import User from "./user.model.js";
import Product from "./product.model.js";

const Order = sequelize.define('order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  // Order status (e.g., pending, shipped, delivered)
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Shipping address
  location: {
    type: DataTypes.STRING,
  },
  // Additional fields as needed (e.g., payment details, delivery date)
});

Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

Order.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product',
});

export default Order
