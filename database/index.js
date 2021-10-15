const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  user: 'FIX_ME',
  password: 'FIX_ME',
  database: 'FIX_ME'
});

// simple query
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = connection;