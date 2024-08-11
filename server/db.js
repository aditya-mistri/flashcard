const mysql = require('mysql2');
require('dotenv').config();

console.log('Attempting to connect to database with following config:');
console.log('Host:', process.env.MYSQL_ADDON_HOST);
console.log('Database:', process.env.MYSQL_ADDON_DB);
console.log('User:', process.env.MYSQL_ADDON_USER);

const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, conn) => {
  if(err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log("Connected successfully to the database");
    conn.release();
  }
});

module.exports = pool.promise();