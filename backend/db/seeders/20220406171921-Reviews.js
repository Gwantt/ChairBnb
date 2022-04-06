'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      { userId: 3, spotId: 1, review: 'Fantastic chair, good build quality, love it!', rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, spotId: 2, review: 'Fantastic chair, good build quality, love it!', rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, spotId: 3, review: 'Fantastic chair, good build quality, love it!', rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, spotId: 1, review: 'Decent chair, good build quality, kind of hard to sit on after a while but overall is a good chair', rating: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, spotId: 2, review: 'This chair could be better not gonna lie waste of money', rating: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, spotId: 3, review: 'WORST CHAIR I\'VE EVER SAT ON IN MY LIFE', rating: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, spotId: 1, review: 'Wonderful chair', rating: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, spotId: 2, review: 'Horrible Chair do not rent', rating: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, spotId: 3, review: 'I love chairs', rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, spotId: 1, review: 'My favorite chair ever', rating: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, spotId: 2, review: 'Its ok', rating: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, spotId: 3, review: 'Not the best not the worst', rating: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, spotId: 1, review: 'I\'ve had better', rating: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, spotId: 2, review: 'LOVE IT!!!!', rating: 5, createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
