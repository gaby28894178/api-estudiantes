const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Producto = sequelize.define('producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
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

Producto.beforeCreate(async (producto) => {
    if (!producto.nombre) {
        throw new Error("El producto debe tener un nombre");
    }
    if (producto.precio <= 0) {
        throw new Error("El precio del producto debe ser mayor que cero");
    }
   
});

(async () => {
    try {
        await sequelize.sync();
        console.log('Base de datos Productos  y tablas creadas');

        const count = await Producto.count();
        if (count === 0) {
            await Producto.bulkCreate([
                {
                    nombre: 'Producto 1',
                    descripcion: 'Descripción del producto 1',
                    precio: 100.00,
                    stock: 50,
                    urlImagen: 'https://i.postimg.cc/4nDtQQGS/work-4997565-640.png',
                    categoria: 'Categoría A'
                },
                {
                    nombre: 'Producto 2',
                    descripcion: 'Descripción del producto 2',
                    precio: 150.00,
                    stock: 30,
                    urlImagen: 'https://i.postimg.cc/9XphsQvs/woman-8953240-640.jpg',
                    categoria: 'Categoría B'
                },
                {
                    nombre: 'Producto 3',
                    descripcion: 'Descripción del producto 3',
                    precio: 200.00,
                    stock: 20,
                    urlImagen: 'https://i.postimg.cc/269xBv1P/ai-generated-8612606-640.jpg',
                    categoria: 'Categoría C'
                },
                {
                    nombre: 'Producto 4',
                    descripcion: 'Descripción del producto 4',
                    precio: 250.00,
                    stock: 15,
                    urlImagen: 'https://i.postimg.cc/9QXfWgBL/happiness-6530400-640.jpg',
                    categoria: 'Categoría D'
                },
                {
                    nombre: 'Producto 5',
                    descripcion: 'Descripción del producto 5',
                    precio: 300.00,
                    stock: 10,
                    urlImagen: 'https://i.postimg.cc/3N5Zb9ct/abstract-6492650-640.jpg',
                    categoria: 'Categoría E'
                }
            ]);
            console.log('Datos de muestra insertados Productos');
        }
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();

module.exports =  Producto;
