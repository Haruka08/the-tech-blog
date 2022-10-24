const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedBlog = require('./blog');
const seedComment = require('./comment');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  await seedComment();

  process.exit(0);
};

seedAll();