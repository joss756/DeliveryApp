const db = require('./db');

db.query('SELECT 1 + 1 AS resultado', (err, rows) => {
  if (err) {
    console.error(' Error ejecutando consulta:', err);
  } else {
    console.log(' Resultado de prueba:', rows);
  }
  db.end();
});
