const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, { 
    logging: false,
    dialectOptions: {
        ssl: {
          require: true, // Requerir SSL
          rejectUnauthorized: false // Desactivar la verificación de certificados si es necesario
        }
      }



})

module.exports = sequelize;