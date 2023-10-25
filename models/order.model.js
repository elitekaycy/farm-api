import sequelize from "../utils/db";
import { Sequelize, DataTypes } from "sequelize";

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
    allowNull: false,
  },
  // Additional fields as needed (e.g., payment details, delivery date)
});

export default Order
