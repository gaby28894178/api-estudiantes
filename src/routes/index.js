const express = require('express');
const productosRouter = require('./producto.router');
const fotosRouter = require('./fotos.router');
const videosRouter = require('./videos.router');
const terrorRouter = require('./terror.router');
const almacenRouter = require('./almacen.router');
const router = express.Router();

// colocar las rutas aquí

router.use('/productos',productosRouter)
router.use('/fotos',fotosRouter)
router.use('/videos',videosRouter)
router.use('/terror',terrorRouter)
router.use('/almacen',almacenRouter)



module.exports = router;