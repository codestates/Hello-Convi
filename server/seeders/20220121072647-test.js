'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        email: 'test' + i + '@example.com',
        nickname: 'testUser' + i,
        password: '1234',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      };
      users.push(obj);
    }
    const items = [];
    for (let i = 0; i < 10; i++) {
      const obj = {
        name: '삼각김밥' + i,
        img: i,
        price: i * 1000,
        content: '맛이조아' + i,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      };
      items.push(obj);
    }
    const category = [
      {
        name: '음료',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '과자',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '생활용품',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: 'cu',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: 'seven',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: 'gs',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
    ];
    const reviews = [];
    for (let i = 1; i < 6; i++) {
      const obj = {
        userId: i,
        itemId: i,
        score: i,
        content: '별로야',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      };
      reviews.push(obj);
    }
    await queryInterface.bulkInsert('users', users, {});
    await queryInterface.bulkInsert('items', items, {});
    await queryInterface.bulkInsert('categories', category, {});
    await queryInterface.bulkInsert('reviews', reviews, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
