const User = require('../models');

const userData = [
  {
    id: 1,
    userName: 'Anna01',
    email: 'apple101',
    password: "anna01@email.com",
  },
  {
    id: 2,
    userName: 'Brian02',
    email: 'orange201',
    password: "brian02@email.com"
  },
  {
    id: 3,
    userName: 'Charlie03',
    email: 'banana301',
    password: "charlie03@email.com"
  },
  {
    id: 4,
    userName: 'Dylan04',
    email: 'pineapple401',
    password: "dylan04@email.com"
  },
  {
    id: 5,
    userName: 'Elsa05',
    email: 'grape501',
    password: "elsa05@email.com",},
  {
    id: 6,
    userName: 'Freddie06',
    email: 'strawberry601',
    password: "freddie06@email.com",},
  {
    id: 7,
    userName: 'Georgia07',
    email: 'blueberry701',
    password: "georgia07@email.com",},
  {
    id: 8,
    userName: 'Helena08',
    email: 'mango801',
    password: "helena08@email.com",},
  {
    id: 9,
    userName: 'Ian09',
    email: 'pear901',
    password: "ian09@email.com",},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;