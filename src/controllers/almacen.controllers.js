const catchError = require('../utils/catchError');
const Almacen = require('../models/Almacen');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await Almacen.findAll();
    return res.json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Almacen.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});

// POST
const create = catchError(async (req, res) => {
    const result = await Almacen.create(req.body);
    return res.status(201).json(result);
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Almacen.update(req.body, { where: { id }, returning: true });
    
    return result[0] === 0 ? res.sendStatus(404) : res.status(204).json(result[1][0]);
});

// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Almacen.destroy({ where: { id } });

    if (!result) {
        return res.status(404).json({ msg: 'Nada Para mostrar' });
    } 
    console.log(res.json({ msg: 'Dato Eliminado con Éxito' }))
    return res.json({ msg: 'Dato Eliminado con Éxito' });
});

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
};