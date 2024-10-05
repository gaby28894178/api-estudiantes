const { getAll, getOne, create, update, destroy } = require('../controllers/almacen.controllers');

const express = require('express');

const almacenRouter = express.Router();

almacenRouter.route('/')
    .get(getAll)
    .post(create);

almacenRouter.route('/:id')
    .get(getOne)
    .delete(destroy)
    .put(update);

module.exports = almacenRouter;