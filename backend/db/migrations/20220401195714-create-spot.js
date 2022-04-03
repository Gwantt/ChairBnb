'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // unique: true,
        references: {model: 'Users'}
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100),
        // unique: true
      },
      image1: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      image2: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      image3: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      state: {
        // allowNull: false,
        type: Sequelize.STRING(200)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
