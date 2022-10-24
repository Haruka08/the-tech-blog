const { User } = require('../models');

const userData = [
  {
    id: 1,
    user_name: "Anna01",
    password: "apple101",
  },
  {
    id: 2,
    user_name: "Brian02",
    password: "orange201"
  },
  {
    id: 3,
    user_name: "Charlie03",
    password: "banana301"
  },
  {
    id: 4,
    user_name: "Dylan04",
    password: "pineapple401"
  },
  {
    id: 5,
    user_name: "Elsa05",
    password: "grape501"
  },
  {
    id: 6,
    user_name: "Freddie06",
    password: "strawberry601"
  },
  {
    id: 7,
    user_name: "Georgia07",
    password: "blueberry701"
  },
  {
    id: 8,
    user_name: "Helena08",
    password: "mango801"
  },
  {
    id: 9,
    user_name: "Ian09",
    password: "pear901"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;