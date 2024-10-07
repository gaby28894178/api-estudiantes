const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

// Definir el modelo Terror
const Terror = sequelize.define('Terror', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cuento: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    urlimagen1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlimagen2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlimagen3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlvideo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Hook antes de crear un registro para validar
Terror.beforeCreate(async (terror) => {
    if (!terror.nombre || !terror.cuento) {
        throw new Error("El registro debe tener un nombre y un cuento.");
    }
});

// Sincronizar y cargar datos de muestra
(async () => {
    try {
        await sequelize.sync();
        console.log('Base de datos y tabla Terror sincronizadas');

        const count = await Terror.count();
        if (count === 0) {
            await Terror.bulkCreate([
                {
                    nombre: 'Luz mala',
                    description: 'Historia de la luz mala',
                    cuento: 'La "Luz Mala" es una leyenda popular en Argentina y otros países de América del Sur. Se trata de una luz brillante que aparece en zonas rurales, especialmente en campos y montañas. Según el folclore, esta luz tiene origen sobrenatural y se asocia con el alma de personas que no encontraron descanso o con tesoros enterrados en antiguos cementerios. Los relatos cuentan que quienes intentan acercarse a la luz suelen perderse o sufrir desgracias.',
                    urlimagen1: 'https://i.postimg.cc/0zdF1WmW/Luz-mala-3.jpg',
                    urlimagen2: 'https://i.postimg.cc/GHD6qhp1/luzmala-1.jpg',
                    urlimagen3: 'https://i.postimg.cc/yDzt54J3/luzmala-2.jpg',
                    urlvideo: 'https://www.youtube.com/watch?v=RUQiUxSb2YM&ab_channel=ElDoQmentalista',
                },
                {
                    nombre: 'Lobizon',
                    description: 'Leyenda del lobizón',
                    cuento: 'El lobizón es una de las leyendas más conocidas de Argentina. Según el mito, el séptimo hijo varón de una familia se transforma en lobizón cada noche de luna llena. Durante esas noches, se convierte en una criatura mitad hombre, mitad lobo, que vaga por los campos aullando y cazando animales pequeños.',
                    urlimagen1: 'https://i.postimg.cc/3kWcqX7V/Lobizon-1.jpg',
                    urlimagen2: 'https://i.postimg.cc/PCcRnC5x/Lobizon-2.jpg',
                    urlimagen3: 'https://i.postimg.cc/DWXYv7Sc/Lobizon-3.jpg',
                    urlvideo: 'https://www.youtube.com/watch?v=fEnm2-KJQtU&ab_channel=MMTops',
                },
                {
                    nombre: 'El AlmaMula',
                    description: 'Leyenda argentina del Almamula',
                    cuento: 'La Almamula es una leyenda popular del norte de Argentina, especialmente en las provincias de Santiago del Estero y Tucumán. Según el mito, la Almamula es el alma en pena de una mujer que cometió graves pecados, relacionados con el deseo carnal. Como castigo, su alma es condenada a transformarse en una mula fantasmagórica que vaga por los montes.',
                    urlimagen1: 'https://i.postimg.cc/G4szJnZN/El-Alma-Mula.jpg',
                    urlimagen2: 'https://i.postimg.cc/TLT96LpM/El-Alma-Mula-2.jpg',
                    urlimagen3: 'https://i.postimg.cc/bdNTVt71/imagen-1.png',
                    urlvideo: 'https://www.youtube.com/watch?v=j4p4z039YTk&ab_channel=MisteriosyLeyendas-MKTUBE',
                },
                {
                    nombre: 'El Silbón',
                    description: 'Leyenda venezolana y colombiana del Silbón',
                    cuento: 'El Silbón es una leyenda popular de los llanos venezolanos y algunas regiones de Colombia. Según la historia, se trata del alma en pena de un joven que fue castigado por cometer un terrible crimen, como el asesinato de su padre. El Silbón se caracteriza por emitir un silbido escalofriante, que aumenta o disminuye en volumen de manera engañosa.',
                    urlimagen1: 'https://i.postimg.cc/PNgLcLJS/elsilbon-1.jpg',
                    urlimagen2: 'https://i.postimg.cc/NK455p4n/elsilbon-2.jpg',
                    urlimagen3: 'https://i.postimg.cc/D81WK2bn/elsilbon-3.jpg',
                    urlvideo: 'https://www.youtube.com/watch?v=yG_ndlVeE8A',
                },
                {
                    nombre: 'La Cegua',
                    description: 'Leyenda de terror en México y Costa Rica',
                    cuento: 'La Cegua es una leyenda popular en Centroamérica, especialmente en Costa Rica y Nicaragua. Cuenta la historia de un espectro que aparece en los caminos rurales, especialmente a hombres que viajan solos de noche. La Cegua se manifiesta como una mujer hermosa que pide ayuda, pero una vez que se sube al vehículo, revela su verdadero rostro: una calavera o criatura grotesca con ojos vacíos y colmillos enormes.',
                    urlimagen1: 'https://i.postimg.cc/75PfThV9/la-segua-1.jpg',
                    urlimagen2: 'https://i.postimg.cc/5H6ynrDF/la-segua-2.jpg',
                    urlimagen3: 'https://i.postimg.cc/xkhC7RSp/la-segua-3.jpg',
                    urlvideo: 'https://www.youtube.com/watch?v=-UOtIdjX4Bw&ab_channel=Penumbria-Historiasdeterror',
                },
                {
                    nombre: 'La Llorona',
                    description: 'Leyenda mexicana - Historia de la Llorona',
                    cuento: 'La Llorona es una leyenda mexicana sobre una mujer llamada María, quien, tras ser traicionada por su esposo, en un ataque de locura, ahoga a sus dos hijos en un río. Después de darse cuenta de su terrible error, comienza a vagar por las orillas del agua, llorando por sus hijos perdidos. Su llanto "¡Ay, mis hijos!" es un presagio de desgracia.',
                    urlimagen1: 'https://i.postimg.cc/PpTPjMxt/la-llorona-1.png',
                    urlimagen2: 'https://i.postimg.cc/GTptBhGV/la-llorona-2.jpg',
                    urlimagen3: 'https://i.postimg.cc/t7RYvDwk/la-llorona-3.jpg',
                    urlvideo: 'https://www.youtube.com/watch?v=5swSs8xkNm0&ab_channel=FRAGMENTOSDELANOCHE',
                },
            ]);
            console.log('Datos de muestra insertados en la tabla Terror');
        }
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();

module.exports = Terror;
