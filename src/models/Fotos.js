const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Foto = sequelize.define('foto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
    artista: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlImagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Foto.beforeCreate(async (fotos) => {
    if (!fotos.nombre) {
        throw new Error("El fotos debe tener un nombre");
    }
   
   
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Base de datos Fotos y tablas creadas');

        const count = await Foto.count();
        if (count === 0) {
            await Foto.bulkCreate([
                {
                    nombre: 'piano ',
                    descripcion: 'piano 1',
                    artista: "alex-50",
                    urlImagen: 'https://i.postimg.cc/LYCNB04g/pexels-20710970-18940655.jpg',
                    categoria: 'Fotos-arte'
                },
                {
                    nombre: 'arbol',
                    descripcion: 'arbol 2',
                    artista: "alex-30",
                    urlImagen: 'https://i.postimg.cc/NLndKVPW/pexels-afterdark-27894095.jpg',
                     categoria: 'Fotos-arte'
                },
                {
                    nombre: 'arbol tempestad 3',
                    descripcion: 'arbol tempestad 3',
                    artista: "alex-20",
                    urlImagen: 'https://i.postimg.cc/Sn6dtKNh/pexels-alexis-herrmann-1256578576-28731552.jpg',
                    categoria: 'Fotos-arte'
                },
                {
                    nombre: 'tren 4',
                    descripcion: 'tren 4',
                    artista: "alex-15",
                    urlImagen: 'https://i.postimg.cc/4mhBV5Dn/pexels-amanda-huang-1867765800-28617352.jpg',
                     categoria: 'Fotos-arte'
                },
           
                {
                    nombre: 'modelo-1 5',
                    descripcion: 'modelo-1 5',
                    artista: "alex-10",
                    urlImagen: 'https://i.postimg.cc/yD4nPRKj/pexels-arishojaei-27872945.jpg',
                    categoria: 'Fotos-arte'
                },
                {
                    nombre: 'barrio 6',
                    descripcion: 'barrio 6',
                    artista: "alex-10",
                    urlImagen: 'https://i.postimg.cc/G82j2JPL/pexels-azizico-27041517.jpg',
                    categoria: 'Fotos-arte'
                },
                {
                    nombre: 'lago-gris 7',
                    descripcion: 'lago-gris 7',
                    artista: "alex-10",
                    urlImagen: 'https://i.postimg.cc/Nyb4BPHC/pexels-d-ng-nhan-324384-4569661.jpg',
                    categoria: 'Fotos-arte'
                },
                {
                    nombre: 'flor-pared 8',
                    descripcion: 'flor-pared 8',
                    artista: "alex-10",
                    urlImagen: 'https://i.postimg.cc/S2vfz2VW/pexels-ekaterina-klimentovich-1867763876-28583055.jpg',
                    categoria: 'Fotos-arte'
                },








            ]);
            console.log('Datos de muestra insertados Fotos');
        }
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();

module.exports =  Foto;
