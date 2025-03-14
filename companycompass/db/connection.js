const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dxvidgc',       
  password: 'KN8#Qs^Q?!YwDUn', 
  database: 'employee_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the employee_db database.');
});

module.exports = connection;