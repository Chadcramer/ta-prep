const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Cramer',
  database : 'twitterTinder'
});
 
connection.connect(() => {console.log('connected to Database')});

module.exports = connection;