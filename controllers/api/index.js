const router = require('express').Router();

const blogRoute = require('./blogpost');

router.use('/blogpost', blogRoute);

module.exports = router;
