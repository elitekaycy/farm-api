import Sequelize from 'sequelize';

const sequelize = new Sequelize('farmapi', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
