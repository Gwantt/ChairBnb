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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/39_27_27_Wide_Tufted_Velvet_Balloon_Chair_updb4s.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/39_27_27_Wide_Tufted_Velvet_Balloon_Chair_1_hbxtnw.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/39_27_27_Wide_Tufted_Velvet_Balloon_Chair_2_o3qgwc.webp',
        name: 'The Scorpion King',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/20211092_master_a2lnmd.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/CFD640EB_8F6B_450E_9962_BE7E3A3112DE_1_105_c_master_febytl.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/10798D97_9CF6_4357_81D3_4AB8B81C789A_1_105_c_master_ks11hm.webp',
        name: 'Pastel Chair',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/Star_Lounger_4_master_uuq7nx.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/Star_Lounger_2_master_yikyau.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876491/ChairBnb/20093082_master_yfge7x.webp',
        name: 'Star Fish',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/Bellagio_II_37.5_27_27_Wide_Velvet_Armchair_ng7hwp.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/Bellagio_II_37.5_27_27_Wide_Velvet_Armchair_1_ohreaj.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/Bellagio_II_37.5_27_27_Wide_Velvet_Armchair_2_pvhjlp.webp',
        name: 'The King Dayton',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/37_Wide_Armchair_by7cdr.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/37_Wide_Armchair_1_u1fglz.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/37_Wide_Armchair_2_lvieag.webp',
        name: 'Death',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/Outdoor-Plastic-Chair-Lawn-Chairs-with-Arms_s2dois.jpg',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/images_gcv3my.jpg',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/220px-Plastic_Tuinstoel_cr63tz.jpg',
        name: 'The Outdoor Classic',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/8998531_master_uowjqe.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876492/ChairBnb/D_Ring_Lounge_Chair_7_master_jdm25s.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648876493/ChairBnb/0U9A4965_1_master_p78dkm.webp',
        name: 'Green Cheetah',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879048/ChairBnb/hugger-curved-swivel-accent-chair_tx7vdk.jpg',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879048/ChairBnb/HuggerSwivelChairAVSSF21_sne88a.jpg',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879048/ChairBnb/HuggerSwivelChair3QSSF21_y9nzvi.jpg',
        name: 'Fuzzy Chair',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878675/ChairBnb/shopping_hfpcsj.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878675/ChairBnb/shopping_1_etulvr.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878675/ChairBnb/shopping_2_cds9v7.webp',
        name: 'The Herman Classic',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878523/ChairBnb/89fb456f-e4c7-4976-9aa0-1ffe75ebb253.cf5927c001e313b5ff172dfc1bca0a42_p83tqk.jpg',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878523/ChairBnb/5488e5cd-c48b-487a-88cc-c4b43b52e849.be401204cb28d5e1a94a8a2068d00ebe_shj35f.jpg',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878523/ChairBnb/c034d04f-d307-4be9-96a9-210c001171ad.fbf43676b8cee0faf95e2194f0e8c0c7_p8llvg.jpg',
        name: 'Leather Luxury',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878511/ChairBnb/C1-Black-1F_opt-2160_600x_v1eej6.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878511/ChairBnb/C1-Black-3F_opt-2160_600x_d9csrm.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878511/ChairBnb/C1-Black-2F_opt-2160_600x_ibmmgo.webp',
        name: 'Office Hours',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879914/ChairBnb/Melrose_Teak_Patio_Chair_with_Cushions_whlnds.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879914/ChairBnb/Melrose_Teak_Patio_Chair_with_Cushions_2_myvnvo.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879914/ChairBnb/Melrose_Teak_Patio_Chair_with_Cushions_1_kemzgi.webp',
        name: 'Tweak Patio Lounger',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879915/ChairBnb/default_name_hk7jn3.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879915/ChairBnb/default_name_1_uawiox.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879915/ChairBnb/default_name_2_u9ojur.webp',
        name: 'Stanley',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879914/ChairBnb/Hemphill_104__Wide_Reversible_Sofa_Chaise_with_Ottoman_tczkup.webp',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879915/ChairBnb/Hemphill_104__Wide_Reversible_Sofa_Chaise_with_Ottoman_2_jilr7w.webp',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648879914/ChairBnb/Hemphill_104__Wide_Reversible_Sofa_Chaise_with_Ottoman_tczkup.webp',
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
        image1: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878503/ChairBnb/Lifestyle-Solutions-Lillith-Mid-Century-Modern-Chair-in-Navy-Blue-400x400_eq4bpu.png',
        image2: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878503/ChairBnb/Lifestyle-Solutions-Lillith-Mid-Century-Modern-Chair-in-Navy-Blue.-400x400_z2fadc.jpg',
        image3: 'https://res.cloudinary.com/daeopbcax/image/upload/v1648878503/ChairBnb/Lifestyle-Solutions-Lillith-Mid-Century-Modern-Chair-in-Navy-Blue-400x400_yjfz0u.jpg',
        name: 'Howards Favorite',
        price: 23,
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
