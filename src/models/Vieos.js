const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

// En Mayúsculas y singular
const Video = sequelize.define('video', {
    // Definimos las columnas aquí
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        // allowNull por defecto está en true
        allowNull:false
    },
    urlvideo: {
        type: DataTypes.STRING,
        // allowNull por defecto está en true
        allowNull:false
    }
});

Video.beforeCreate(async (videos) => {
    if (!videos.nombre) {
        throw new Error("El video debe tener un nombre");
    }
});

(async () => {
    try {
        await sequelize.sync(); 
        console.log('Base de datos y tablas de Video creadas');

        const count = await Video.count();
        if (count === 0) {
            await Video.bulkCreate([
                {
                    nombre: 'puente',
                    descripcion: 'puente sobre el río',
                    urlvideo: 'https://cdn.pixabay.com/video/2023/11/26/190776-888535446_large.mp4',
                },
                {
                    nombre: 'fogata',
                    descripcion: 'fogata en el campo',
                    urlvideo: 'https://cdn.pixabay.com/video/2024/01/21/197564-905005767_large.mp4',
                },
                {
                    nombre: 'campo',
                    descripcion: 'campo al atardecer',
                    urlvideo: 'https://cdn.pixabay.com/video/2024/09/21/232561_large.mp4',
                }
            ]);
            console.log('Datos de muestra insertados en Videos');
        }
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error.message);
        console.error(error);
    }
})();

module.exports = Video;
