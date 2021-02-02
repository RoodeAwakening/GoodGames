'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {username: 'DemoUser',firstName:'Demo',lastName:'User',email:'demo@user.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'dR ocTaGoN',firstName:'Brian',lastName:'Fantana',email:'adell.smitham@will.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Captain ACAB',firstName:'Veronica',lastName:'Corningstone',email:'eladio15@gmail.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'newsNow4',firstName:'Ron',lastName:'Burgundy',email:'rfunk@kulas.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'K a n n a',firstName:'Stephanie',lastName:'Essons',email:'kheller@murazik.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'ᴹᴿƝƠƁƠƊƳ',firstName:'Sabryna',lastName:'Jacobs',email:'sabryna31@von.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Xenialri03',firstName:'Talia',lastName:'Bechtelar',email:'talia44@bechtelar.biz',hashedPassword:bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Lanza_Droll',firstName:'Kiarra',lastName:'Mosciski',email:'kiarra11@mosciski.com',hashedPassword:bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Stompgeek7559',firstName:'Richmond',lastName:'Schinner',email:'richmond.schinner@gmail.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Fiddlesticks',firstName:'Raymundo',lastName:'Cummerata',email:'raymundo.cummerata@schmitt.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Glitchleet1337199',firstName:'Willms',lastName:'Orval',email:'willms.orval@damore.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Lk_99Loony',firstName:'Chris',lastName:'Hernser',email:'hernser@hotmail.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
        {username: 'Zephyrylucy200',firstName:'Marlin',lastName:'Carroll',email:'marlin.carroll@kulas.com',hashedPassword: bcrypt.hashSync('P@ssw0rd', 10)},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
