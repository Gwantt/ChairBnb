'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Spots', [
      {
        userId: 1,
        address: '1 Dayton Street',
        city: 'Modesto',
        state: 'California',
        country: 'United States',
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846545/Chairs/18PIG-COUCH-videoSixteenByNineJumbo1600-v3_viprj3.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846544/Chairs/Copy_of_Copy_of_Untitled_Design_34_1024x1024_oacgbc.webp',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/B600001175_1_rgyb5a.webp',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/1643662283-screen-shot-2022-01-31-at-2-50-14-pm-1643662239_utawgw.png',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/1643662283-screen-shot-2022-01-31-at-2-50-14-pm-1643662239_utawgw.png',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/artworks-000438908376-2ipyf9-t500x500_ffuzzn.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/612Nwyb4zoL._AC_UL604_SR604_400__hqhedc.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/1646159132-57867764_030_b_mcssyo.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/ccef12b96e8baccf9f4b4c4162ec0174_dxeiny.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/1585672494-prudence-butterfly-chair-1585672464_hrab5p.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/246096_grey_fabric_sofa_signature_01_ks94tb.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846543/Chairs/1639435672-roan-wood-office-chair_wu8d7p.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/39_27_27_Wide_Tufted_Velvet_Balloon_Chair_tztazz.webp',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/img20c_ahfsju.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/shopping_ywtafo.webp',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/Star_Lounger_2_master_torp1m.webp',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/CWNUfS9W4AAzGD7_ecc6gv.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/QS_Le_Main_30_27_27_Wide_Armchair_qtfdhn.webp',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/och-executive-office-chairs_wyp2si.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/images_1_v5dd3o.jpg',
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
        image: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648846542/Chairs/images_wswzas.jpg',
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
