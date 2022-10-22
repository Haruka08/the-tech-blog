const Blog= require('../models');

const blogData = [
  {
    id: 1,
    userName: 'Anna01',
    title: 'test1',
    content: 'this is a test 1.',
    dateCreated: 'June 22, 2021 09:00:00',
    comment: ''
    },
  {
    id: 2,
    userName: 'Brian02',
    title: 'test2',
    content: 'this is a test 2.',
    dateCreated: 'July 18, 2020 11:00:00',
    comment: ''
    },
  {
    id: 3,
    userName: 'Charlie03',
    title: 'test3',
    content: 'this is a test 3.',
    dateCreated: 'January 12, 2021 18:00:00',
    comment: ''
    },
  {
    id: 4,
    userName: 'Dylan04',
    title: 'test4',
    content: 'this is a test 4.',
    dateCreated: 'August 10, 2022 15:00:00',
    comment: ''
    },
  {
    id: 5,
    userName: 'Elsa05',
    title: 'test5',
    content: 'this is a test 5.',
    dateCreated: 'September 16, 2018 16:00:00',
    comment: ''
    },
  {
    id: 6,
    userName: 'Freddie06',
    title: 'test6',
    content: 'this is a test 6.',
    dateCreated: 'May 19, 2019 17:00:00',
    comment: ''
    }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;