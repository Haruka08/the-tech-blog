const router = require('express').Router();
const { Blog, Comment} = require('../models');

// GET all blog posts for homepage - Unable to Render
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('dashboard', {
      blogs,
      login: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET blogs posted by a user
router.get('/user', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        where:{
          user_name: req.session.user_name
        }
    })
    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('userHome', {
      blogs,
      login: req.session.loggedIn
    });
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blog/new', async (req, res) => {
  try {
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('blog',{
      login: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findOne({
        where:{
          id: req.params.id,
        }
    })
    const blog = blogData.get({ plain: true });

    // Send over the 'loggedIn' session variable to the 'homepage' template
    
    res.render('edit-blog',{
      blog,
      login: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/comment/:id', async (req, res) => {
  try {
    const blogData = await Blog.findOne({
        where:{
          id: req.params.id,
        }
    })
    const blog = blogData.get({ plain: true });

    // Send over the 'loggedIn' session variable to the 'homepage' template
    
    res.render('comment',{
      blog,
      login: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
