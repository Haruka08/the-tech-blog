const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./homepage.js');

router.use('/', homePage);
router.use('/api', apiRoutes);

module.exports = router;
