

const express = require('express');

const router = express.Router();
const Entry = require('../models/entry.js');
const Comment = require('../models/comment.js');

router.get('/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  const comments = await Comment.find({ entry: entry._id });
  return res.render('card_tea', { entry, comments });
});

module.exports = router;
