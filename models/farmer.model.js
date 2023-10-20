import sequelize from '../utils/db.js';
import {Sequelize, DataTypes } from 'sequelize';

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
        unique: false,
        validate: {
            isEmail: true
        }
    },
    image: {
        type: DataTypes.BLOB('long')
    }
});


export default Farmer