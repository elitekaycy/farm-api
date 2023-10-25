import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../utils/db';

const Report = sequelize.define('report', {
  // Unique identifier for the report
  reportId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  // User who is making the report
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Farmer or product being reported
  reportedId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Type of report (e.g., product quality, farmer behavior, etc.)
  reportType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Detailed description or comments
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Additional fields as needed (e.g., timestamps, status)
});


export default Report
