const express = require('express');
const mysql = require('mysql2');
const app = express();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ativ4renato'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

app.get('/', (request, response) => {
    return response.status(200).json({
        message: "Hello"
    });
});

app.get('/consultadados', (request, response) => {
    const query = 'SELECT * FROM consultadados';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return response.status(500).json({
                error: 'Erro ao buscar dados do banco de dados'
            });
        }

        return response.status(200).json({
            data: results
        });
    });
});

module.exports = app;

