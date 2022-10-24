const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./homepage.js');
const login = require('./login.js');

router.use('/', homePage);
router.use('/api', apiRoutes);
router.use('/login', login);

module.exports = router;
