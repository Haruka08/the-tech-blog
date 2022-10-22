const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedBlog = require('./blog');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  process.exit(0);
};

seedAll();