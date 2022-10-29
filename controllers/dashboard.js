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
    res.render('homepage', {
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
    res.render('dashboard', {
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
    res.render('blog');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/comment/new', async (req, res) => {
    try {
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('comment');
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

// router.post('/comment', async (req, res) => {
//   try {
//     const comments = await Comment.create({
//       comment: req.body.comment
//     });

//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('comment', {
//       comments,
//       login: req.session.loggedIn
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.post('/api/blog/new', async (req, res) => {
//   try {
//     const blogData = await Blog.create({
//       user_name: req.session.user_name,
//       title: req.body.title,
//       content: req.body.content
//     });

//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('blog', {
//       blogData,
//       login: req.session.loggedIn
//     });

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
