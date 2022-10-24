const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    user_name: 'Anna01',
    blog_id: '2',
    comment: 'Hello, this is great!',
    date_created: 'June 22, 2021 09:00:00',
    },
  {
    id: 2,
    user_name: 'Brian02',
    blog_id: '2',
    comment: 'Hello, this is fantastic!',
    date_created: 'August 12, 2021 12:00:00',
    },
  {
    id: 3,
    user_name: 'Charlie03',
    blog_id: '1',
    comment: 'Hi, this is fantastic!',
    date_created: 'June 11, 2020 19:00:00',
    },
  {
    id: 4,
    user_name: 'Dylan04',
    blog_id: '1',
    comment: 'Hello, this is brilliant!',
    date_created: 'January 2, 2021 07:00:00',
    },
  {
    id: 5,
    user_name: 'Elsa05',
    blog_id: '4',
    comment: 'Hi, this is amazing!',
    date_created: 'October 8, 2022 14:00:00',
    },
  {
    id: 6,
    user_name: 'Freddie06',
    blog_id: '4',
    comment: 'Hello, this is beyond amazing!',
    date_created: 'December 10, 2021 17:00:00',
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;