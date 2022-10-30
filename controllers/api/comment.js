const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

  // CREATE a comment - add WithAuth
  router.post('/:blog_id', async (req, res) => {
    try {
      const newComment = Comment.create({
        comment: req.body.comment,
        blog_id: req.params.blog_id,
        user_name: req.session.user_name,
      })

      res.status(200).json(newComment)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//   // GET a blog
// router.get('/blog', async (req, res) => {
//   try {
//     const blog = await Blog.findOne({
//         where:{
//           blog_id: req.body.blog_id
//         }
//     })

//     res.status(200).json(blog)
//   }catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //UPDATE a blog
// router.put('/update', async (req, res) => {
//     try{
//     const updatedComment = await Comment.update(
//         {
//         // All the fields you can update and the data attached to the request body.
//         title: req.body.title,
//         content: req.body.content
//         },
//         {
//         // Gets a book based on the book_id given in the request parameters
//         where: {
//             blog_id: req.body.blog_id,
//         },
//         }
//     );
//     res.status(200).json(updatedComment);
//     }catch(err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

//   // DELTE a blog post - add WithAuth
//   router.delete('/delete', withAuth, async (req, res) => {
//     try {
//       const deletedComment = await Comment.destroy({
//         where: {
//           blog_id: req.body.blog_id,
//         },
//       })
//       res.status(200).json(deletedComment);
//     }catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

  module.exports = router;