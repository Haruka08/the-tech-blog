const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// user to blog relationship
User.hasMany(Blog, {
    foreignKey: 'user_name',
    onDelete: 'CASCADE'
  });
  
Blog.belongsTo(User, {
foreignKey: 'user_name',
});
  
// user to comment relationship
User.hasMany(Comment, {
  foreignKey: 'user_name',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
foreignKey: 'user_name',
});

// blog to comment relationship
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
foreignKey: 'blog_id',
});


module.exports = { User, Blog, Comment };
