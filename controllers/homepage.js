const router = require('express').Router();
const { User, Blog } = require('../models');

// GET all blog posts for homepage - Unable to Render
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      blogs
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('login');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/register', async (req, res) => {
  try {
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('register');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
