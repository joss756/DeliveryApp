const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// =====================
// Ruta de prueba
// =====================
app.get('/test', (req, res) => {
  db.query('SELECT * FROM Clientes', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// =====================
// Registro de usuario
// =====================
app.post('/register', (req, res) => {
  const { nombre, email, contraseña } = req.body;
  const hash = bcrypt.hashSync(contraseña, 10);

  const query = 'INSERT INTO Clientes (nombre, email, contraseña_hash) VALUES (?, ?, ?)';
  db.query(query, [nombre, email, hash], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al registrar usuario', details: err });
    }
    res.json({ message: 'Registro exitoso', id_cliente: results.insertId });
  });
});

// =====================
// Login de usuario
// =====================
app.post('/login', (req, res) => {
  const { email, contraseña } = req.body;

  db.query('SELECT * FROM Clientes WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const user = results[0];
    if (!bcrypt.compareSync(contraseña, user.contraseña_hash)) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.json({
      message: 'Login exitoso',
      user: {
        id: user.id_cliente,
        nombre: user.nombre,
        email: user.email,
        telefono: user.telefono,
        direccion_envio: user.direccion_envio
      }
    });
  });
});

// =====================
// Actualizar perfil
// =====================
app.put('/perfil/:id', (req, res) => {
  const { telefono, direccion_envio } = req.body;
  const { id } = req.params;

  const query = 'UPDATE Clientes SET telefono = ?, direccion_envio = ? WHERE id_cliente = ?';
  db.query(query, [telefono, direccion_envio, id], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar perfil', details: err });
    }
    res.json({ message: 'Perfil actualizado correctamente' });
  });
});

// =====================
// Iniciar servidor
// =====================
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
