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
    const items = [
      {
        name: '6찬정식',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8801771022688.jpg',
        price: 4000,
        content: '6가지 반찬으로 구성된 가성비 도시락',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '흑임자치킨샐러드',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8801068388664.jpg',
        price: 3500,
        content: '몸에 좋고 맛도 좋은 흑임자드레싱이 들어간 치킨샐러드',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '아임닭올리브닭가슴살',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809487130178.jpg',
        price: 4300,
        content: '단백질 39g 달걀 4.5개 분량의 아임닭 콜라보, 단백질강조형 샐러드',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '떡튀순어묵탕SET',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809453263640.jpg',
        price: 6500,
        content: '인기 분식메뉴인 떡볶이, 튀김, 순대, 어묵탕이 만났다! Home 분식점 컨셉의 SET 상품',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '빽햄스페셜정식',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809453264067.jpg',
        price: 4300,
        content: '빽햄으로 구성된 가성비 정식 도시락',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '에그가먼저닭샐러드',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8801068378887.jpg',
        price: 3500,
        content: '맛있는 다이어트가 가능한 저탄고단 샐러드 구성:단백질 가득한 삶은달걀 & 닭가슴살+ 매콤한 스파이시렌치드레싱 + 신선한 4가지 야채믹스',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '강력추천!8찬정식',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809453262063.jpg',
        price: 4500,
        content: 'CU가 자신 있게 추천하는 8찬 구성의 정찬형 도시락 제육볶음, 광양식돈불고기, 닭갈비 등 총 3가지 고기 토핑',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '통새우로제닭갈비덮밥',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809196614914.jpg',
        price: 3900,
        content: '매콤한 닭갈비와 통새우를 고제소스에 비벼먹는 프리미엄 덮밥',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '가라아게불닭덮밥',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809451527577.jpg',
        price: 4000,
        content: '통통한 가라아게 튀김과 곁들여 먹을 수 있는 프리미엄 불닭 덮밥',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
      {
        name: '햄치즈듬뿍부대찌개',
        img: 'http://bgf-cu.xcache.kinxcdn.com/product/8809196614099.jpg',
        price: 4300,
        content: '간편하게 조리하는 1인 부대찌개!',
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      },
    ]
    
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
