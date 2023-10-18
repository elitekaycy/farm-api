const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db'); // Import your Sequelize connection

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

module.exports = Type;
