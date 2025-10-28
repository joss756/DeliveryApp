const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',        // o la IP de tu servidor MySQL
  user: 'root',             // usuario de MySQL
  password: 'romero',       // contraseña
  database: 'PasteleriaEcommerce',
  port: 3306                // asegúrate que el puerto es correcto
});

db.connect(err => {
  if (err) {
    console.error(' Error al conectar a la base de datos:', err.message);
    return;
  }
  console.log(' Conexión a MySQL exitosa');
});

module.exports = db;
