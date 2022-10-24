const { Blog } = require('../models');

const blogData = [
  {
    id: 1,
    user_name: 'Anna01',
    title: 'test1',
    content: 'this is a test 1.',
    date_created: 'June 22, 2021 09:00:00'
    },
  {
    id: 2,
    user_name: 'Brian02',
    title: 'test2',
    content: 'this is a test 2.',
    date_created: 'July 18, 2020 11:00:00'
    },
  {
    id: 3,
    user_name: 'Charlie03',
    title: 'test3',
    content: 'this is a test 3.',
    date_created: 'January 12, 2021 18:00:00'
    },
  {
    id: 4,
    user_name: 'Dylan04',
    title: 'test4',
    content: 'this is a test 4.',
    date_created: 'August 10, 2022 15:00:00'
    },
  {
    id: 5,
    user_name: 'Elsa05',
    title: 'test5',
    content: 'this is a test 5.',
    date_created: 'September 16, 2018 16:00:00'
    },
  {
    id: 6,
    user_name: 'Freddie06',
    title: 'test6',
    content: 'this is a test 6.',
    date_created: 'May 19, 2019 17:00:00'
    }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;