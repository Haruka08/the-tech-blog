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
      blogs,
      login: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blog', async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('blog', {
      blogs,
      login: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/comment', async (req, res) => {
  try {
    const blogData = await Blog.create();

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('comment', {
      blogs,
      login: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
