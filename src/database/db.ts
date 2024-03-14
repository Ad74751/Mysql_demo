import mysql2 from "mysql2";

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mlapp',
    connectionLimit: 10, // Adjust this value as needed
    queueLimit: 0, // if set to 0, it will be unlimited
    debug: true
});

export default db;