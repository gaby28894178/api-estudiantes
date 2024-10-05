const { getAll, getOne, create, update, destroy } = require('../controllers/fotos.controllers');

const express = require('express');

const fotosRouter = express.Router();

fotosRouter.route('/')
    .get(getAll)
    .post(create);

fotosRouter.route('/:id')
    .get(getOne)
    .delete(destroy)
    .put(update);

module.exports = fotosRouter;