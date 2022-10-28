const router = require('express').Router();

const homePage = require('./homepage.js');
const dashboard = require('./dashboard.js');
const apiRoutes = require('./api');

router.use('/', homePage);
router.use('/', dashboard);
router.use('/api', apiRoutes);

module.exports = router;
