const User = require('../models');

const userData = [
  {
    id: 1,
    userName: 'Anna01',
    password: "apple101",
  },
  {
    id: 2,
    userName: 'Brian02',
    password: "orange201"
  },
  {
    id: 3,
    userName: 'Charlie03',
    password: "banana301"
  },
  {
    id: 4,
    userName: 'Dylan04',
    password: "pineapple401"
  },
  {
    id: 5,
    userName: 'Elsa05',
    password: "grape501"
  },
  {
    id: 6,
    userName: 'Freddie06',
    password: "strawberry601"
  },
  {
    id: 7,
    userName: 'Georgia07',
    password: "blueberry701"
  },
  {
    id: 8,
    userName: 'Helena08',
    password: "mango801"
  },
  {
    id: 9,
    userName: 'Ian09',
    password: "pear901"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;