const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST a new blog post - add WithAuth
router.post('/blogpost', async (req, res) => {
  try {
    const newBlog = await Blog.create({
        title: req.body.title,
        content: req.body.content,
        user_name: req.session.user_name
    })
    
    res.json(newBlog);

    res.render('homepage',)
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE the specific blog post and comment - add WithAuth
  router.post('/blogpost', async (req, res) => {
    try {
      const blogPost = await Blog.findOne(req.body.title)

      const blogComment = Blog.Create({
        comment: req.body.comment
      })
  
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('homepage', {
        blogs,
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