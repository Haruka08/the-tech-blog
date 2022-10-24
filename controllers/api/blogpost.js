const router = require('express').Router();
const { User, Blog } = require('../../models');
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