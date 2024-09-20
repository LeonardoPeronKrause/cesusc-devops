// src/app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para servir o HTML
app.get('/index', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
