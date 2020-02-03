'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*     
      Fabi: Up inseri
    */
      return queryInterface.bulkInsert('products', [
        {
        name: 'Cafe Americano',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cafe Com Leite',
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Misto Quente',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suco Natural',
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hamburguer Simples',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hamburguer Duplo',
        price: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata Frita',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cebola Frita',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agua 500ml',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agua 750ml',
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 750ml',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
 
    ], {});
    
  },
 
  down: (queryInterface, Sequelize) => {
    /*      
      Fabi: Down deleta o que inseri dentro de products
    */
 
      return queryInterface.bulkDelete('products', null, {});
    
  }
};

