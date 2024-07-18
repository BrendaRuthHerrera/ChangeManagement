const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createContection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_NAME,
    
})