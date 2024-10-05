const { getAll, getOne} = require('../controllers/videos.controllers');

const express = require('express');

const videosRouter = express.Router();

videosRouter.route('/')
    .get(getAll)
  
videosRouter.route('/:id')
    .get(getOne)
  

module.exports = videosRouter;