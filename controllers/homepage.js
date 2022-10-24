const router = require('express').Router();
const { User, Blog } = require('../models');

// GET all blog posts for homepage - Unable to Render
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    // const blogs = blogData.map((blog) =>
    //   blog.get({ plain: true })
    // );
    // // Send over the 'loggedIn' session variable to the 'homepage' template
    // res.render('homepage', {
    //   blogs,
    // });

    res.status(200).json(blogData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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
        .json({ message: 'Incorrect email. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
