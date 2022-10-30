const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user WORKING
router.post('/register', async (req, res) => {
    try {
      const newUser = await User.create({
        user_name: req.body.user_name,
        password: req.body.password
      });
  
      res.status(200).json(newUser)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Login
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          user_name: req.body.user_name
        },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_name = userData.user_name

        res
          .status(200)
          .json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

    // Logout
    router.post('/logout', (req, res) => {
        // When the user logs out, destroy the session
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });
  
module.exports = router;