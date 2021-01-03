const express = require('express');

const router = express.Router();
const Entry = require('../models/entry.js');
const Comment = require('../models/comment.js');
const { findOne } = require('../models/comment.js');


router.get('/', (req, res) => {
  res.render('entry');
});

router.post('/', async (req, res) => {
  const {
    title, description, location, coordinates,
  } = req.body;
  const entry = new Entry({
    title, description, location, coordinates,
  });
  try {
    await entry.save();
  } catch (error) {
    console.log(error);
    return res.send('wrong!');
  }
  res.send('OK!');
});

router.post('/photo/:id', async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const { sampleFile } = req.files;
  const entry = await Entry.findById({ _id: req.params.id });
  entry.file = `/img/${sampleFile.name}`;
  await entry.save();
  await sampleFile.mv(PATH, (err) => {
    if (err) return res.status(500).send(err);

    res.redirect(`/card/${entry._id}`);
  });
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  await Entry.deleteOne({ _id: id });
  const comments = await Comment.deleteMany({ entry: id });
  res.status(200).end();
});

module.exports = router;
