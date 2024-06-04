const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return
    response.status(200)
    .json({
        mensage:"Hello"
    });
});

module.exports = app;