const router = require('express').Router();

const blogRoute = require('./blog');
const commentRoute = require('./comment');
const userRoute = require('./user');

router.use('/blog', blogRoute);
router.use('/comment', commentRoute);
router.use('/user', userRoute);

module.exports = router;
