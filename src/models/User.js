module.exports = (sequelize, DataTypes) => {
    const tableU = sequelize.define(
      'User',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        displayName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        timeStamps: false,
        tableName: 'users',
        underscored: true,
      },
    )
  return tableU;
};