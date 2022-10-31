const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

  // CREATE a comment - add WithAuth
  router.post('/:id', async (req, res) => {
    try {
      const newComment = Comment.create({
        comment: req.body.comment,
        foreignKey: parseInt(req.params.id),
        user_name: req.session.user_name,
      })

      res.status(200).json(newComment)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;