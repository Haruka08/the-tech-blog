const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'userName',
    onDelete: 'CASCADE'
  });
  
Blog.belongsTo(User, {
foreignKey: 'userName',
});
  
module.exports = { User, Blog };
