const catchError = require('../utils/catchError');
const Terror = require('../models/Terror');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await Terror.findAll();
    return res.json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Terror.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});



module.exports = {
    getAll,
    getOne
};