const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

const toronto = require('./JSON/toronto.json');
const goldenState = require('./JSON/gState.json');

app.get('/toronto', (req, res) => {
    res.json(toronto);
});

app.get('/golden-state', (req, res) => {
    res.json(goldenState);
});

app.listen(PORT,() => {
    console.log(`server on : ${PORT}`);
});
