const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Almacen = sequelize.define('almacen', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    urlImagen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Almacen.beforeCreate(async (almacen) => {
    if (!almacen.nombre) {
        throw new Error("El almacen debe tener un nombre");
    }
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Base de datos Almacen y tablas creadas');

        const count = await Almacen.count();
        if (count === 0) {
            await Almacen.bulkCreate([
                {
                    nombre: "Aceite",
                    descripcion: "Aceite de girasol 1 litro",
                    stock: 50,
                    precio: 350,
                    urlImagen: "https://i.postimg.cc/75tQbHHb/aceite.jpg",
                    categoria: "Aceites y grasas"
                },
                {
                    nombre: "Cereal Mix con Pasas",
                    descripcion: "Cereal mix con pasas y frutos secos",
                    stock: 100,
                    precio: 1200,
                    urlImagen: "https://i.postimg.cc/2qPcF0BD/cereal-mix-pasas.jpg",
                    categoria: "Cereales"
                },
                {
                    nombre: "Coronitas con Frutillas",
                    descripcion: "Galletas coronitas sabor frutilla",
                    stock: 75,
                    precio: 600,
                    urlImagen: "https://i.postimg.cc/RqQmhHjF/coronitas-frutillas.jpg",
                    categoria: "Galletas"
                },
                {
                    nombre: "Criollitas 1X1",
                    descripcion: "Galletas Criollitas, paquete de 1X1",
                    stock: 80,
                    precio: 500,
                    urlImagen: "https://i.postimg.cc/R33pHkhd/criollitas-1-X1.jpg",
                    categoria: "Galletas"
                },
                {
                    nombre: "Criollitas 3X1",
                    descripcion: "Galletas Criollitas, paquete de 3X1",
                    stock: 65,
                    precio: 900,
                    urlImagen: "https://i.postimg.cc/1VSvb4H7/criollitas-3-X1.jpg",
                    categoria: "Galletas"
                },
                {
                    nombre: "Fideos Tirabuzón",
                    descripcion: "Fideos tirabuzón 500g",
                    stock: 200,
                    precio: 400,
                    urlImagen: "https://i.postimg.cc/XX03n81m/fideo-tirabuzon.jpg",
                    categoria: "Pastas"
                },
                {
                    nombre: "Maná Rellenas de Frutillas",
                    descripcion: "Galletas Maná rellenas sabor frutilla",
                    stock: 90,
                    precio: 450,
                    urlImagen: "https://i.postimg.cc/sGJTzyHj/mana-rellenas-frutillas.jpg",
                    categoria: "Galletas"
                },
                {
                    nombre: "Paseo",
                    descripcion: "Galletas surtidas Paseo",
                    stock: 120,
                    precio: 850,
                    urlImagen: "https://i.postimg.cc/4mWTbT4R/paseo.jpg",
                    categoria: "Galletas"
                },
                {
                    nombre: "Pizzeta 1",
                    descripcion: "Masa para pizzeta 1",
                    stock: 30,
                    precio: 250,
                    urlImagen: "https://i.postimg.cc/WhNvk4v7/pizzeta-1.jpg",
                    categoria: "Panadería"
                },
                {
                    nombre: "Pizzeta 2",
                    descripcion: "Masa para pizzeta 2",
                    stock: 25,
                    precio: 270,
                    urlImagen: "https://i.postimg.cc/K14h0s4k/pizzeta-2.jpg",
                    categoria: "Panadería"
                },
                {
                    nombre: "Pizzetitas",
                    descripcion: "Mini pizzetas congeladas",
                    stock: 40,
                    precio: 300,
                    urlImagen: "https://i.postimg.cc/18Th2cNW/pizzetitas-1.jpg",
                    categoria: "Panadería"
                },
                {
                    nombre: "Surtido Bagley",
                    descripcion: "Galletas surtidas Bagley",
                    stock: 150,
                    precio: 1000,
                    urlImagen: "https://i.postimg.cc/Y4WKHG6t/surtido-bagley.jpg",
                    categoria: "Galletas"
                },
                {
                    nombre: "Vino 1",
                    descripcion: "Vino tinto de mesa",
                    stock: 50,
                    precio: 800,
                    urlImagen: "https://i.postimg.cc/62rk8kbS/vino-1.jpg",
                    categoria: "Bebidas"
                },
                {
                    nombre: "Vino 2",
                    descripcion: "Vino tinto reserva",
                    stock: 30,
                    precio: 1200,
                    urlImagen: "https://i.postimg.cc/jCKVpjLr/vino-2.png",
                    categoria: "Bebidas"
                }
            ]);
            console.log('Datos de muestra insertados en Almacen');
        }
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();

module.exports = Almacen;
