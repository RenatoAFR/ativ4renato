const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.status(200)
    .json({
        message: "Hello"
    });
});

module.exports = app;