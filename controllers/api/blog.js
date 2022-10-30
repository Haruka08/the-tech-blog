const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE a new blog post - add WithAuth
router.post('/new', async (req, res) => {
    try {
      const newBlog = await Blog.create({
          ...req.body,
          user_name: req.session.user_name,
      })
  
      res.status(200).json(newBlog)
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
  
// CREATE a new comment - add WithAuth
// router.post('/comment/:id', async (req, res) => {
//     try {
//       const newComment = await Comment.create({
//           comment: req.body.comment,
//           blog_id: req.body.blog_id,
//           user_name: req.session.user_name,
//       })
  
//       res.status(200).json(newComment)
//     }catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

//UPDATE a blog
router.put('/:id', async (req, res) => {
    try{
    const updatedBlog = await Blog.update(
        {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        content: req.body.content
        },
        {
        // Gets a book based on the book_id given in the request parameters
        where: {
            id: req.params.id,
        },
        }
    );
    res.status(200).json(updatedBlog);
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELTE a blog post - add WithAuth
router.delete('/:id', withAuth, async (req, res) => {
try {
    const deleteBlog = await Blog.destroy({
    where: {
        id: req.params.id,
        user_id: req.session.user_id,
    },
    })

    if (!deleteBlog) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }

    res.status(200).json(deleteBlog);
}catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});
  
  module.exports = router;



  // // GET blogs posted by a user
// router.get('/user', async (req, res) => {
//     try {
//       const blog = await Blog.findAll({
//           where:{
//             user_name: req.session.user_name
//           }
//       })
  
//       res.status(200).json(blog)
//     }catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// // GET blogs posted by a user
// router.get('/', async (req, res) => {
//   try {
//     const blog = await Blog.findAll()

//     res.status(200).json(blog)
//   }catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });