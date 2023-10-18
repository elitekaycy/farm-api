const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db'); // Import your Sequelize connection

const Farmer = sequelize.define('Farmer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT
    },
    location: {
        type: DataTypes.STRING
    },
    gps: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    }
});

module.exports = Farmer;
