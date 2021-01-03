const express = require('express')
const router = express.Router();
const Entry = require('../models/entry.js');


router.get('/', async (req, res)=> {
const entrys = await Entry.find();
  res.json(entrys);
})



module.exports = router;
