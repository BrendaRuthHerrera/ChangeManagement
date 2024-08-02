import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2001',
    database : 'portal_de_aplicaciones',
});

export default connection;