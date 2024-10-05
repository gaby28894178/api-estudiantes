const { getAll, getOne, create, update, destroy } = require('../controllers/terror.controllers');

const express = require('express');

const terrorRouter = express.Router();

terrorRouter.route('/')
    .get(getAll)
 

terrorRouter.route('/:id')
    .get(getOne)
  
module.exports = terrorRouter;