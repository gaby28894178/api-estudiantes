const Producto = require("../models/Producto");

const cargarProductosMuestra = async () => {
    const productos = [
        { 
            nombre: 'Producto 1', 
            descripcion: 'Descripción del Producto 1', 
            precio: 10.99, 
            stock: 100, 
            urlImagen: 'https://example.com/img1.jpg', 
            categoria: 'Electrónica' 
        },
        { 
            nombre: 'Producto 2', 
            descripcion: 'Descripción del Producto 2', 
            precio: 15.99, 
            stock: 50, 
            urlImagen: 'https://example.com/img2.jpg', 
            categoria: 'Ropa' 
        },
        { 
            nombre: 'Producto 3', 
            descripcion: 'Descripción del Producto 3', 
            precio: 20.99, 
            stock: 75, 
            urlImagen: 'https://example.com/img3.jpg', 
            categoria: 'Hogar' 
        }
    ];

    for (let producto of productos) {
        await Producto.create(producto);
    }
};

cargarProductosMuestra().then(() => {
    console.log("Productos de muestra cargados con éxito");
    process.exit();
}).catch(error => {
    console.error("Error al cargar los productos de muestra: ", error);
    process.exit(1);
});
