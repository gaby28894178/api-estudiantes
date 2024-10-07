const { getAll, getOne, create, update, destroy } = require('../controllers/productos.controllers');

const express = require('express');

const productosRouter = express.Router();

productosRouter.route('/')
    .get(getAll)
    .post(create);

productosRouter.route('/:id')
    .get(getOne)
    .delete(destroy)
    .put(update);

module.exports = productosRouter;