const router = require('express').Router();
const { Blog, Comment} = require('../models');

router.get('/comment/new', async (req, res) => {
    try {
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('comment');
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;