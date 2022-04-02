'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Spots', [
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'The Pig',
        price: 700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'Blue Chair',
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'Spongebob Chair',
        price: 330,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'Herman Classic',
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'Zebra  Chair',
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'The Skis',
        price: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'Dayton\'s Favorite',
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'Flower Chair',
        price: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'Hulk Hogan',
        price: 700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'Leather Tarp',
        price: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'White Couch',
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'The Wood Roller',
        price: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'Scorpion King',
        price: 685,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'The Normal',
        price: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'The Classic',
        price: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'Starfish Supreme',
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'Slanted Red',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'Double Cupper',
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        name: 'Office Chair',
        price: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '300 Chair Lane',
        city: 'Boston',
        state: 'Massachusetts',
        country: 'United States',
        name: 'Grandpas Favorite',
        price: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        address: '910 Wild Horse Street',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        name: 'Lazy Boy',
        price: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
