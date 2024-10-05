const catchError = require('../utils/catchError');
const Videos = require('../models/Vieos');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await Videos.findAll();
    return res.json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Videos.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});


module.exports = {
    getAll,
    getOne
   
};