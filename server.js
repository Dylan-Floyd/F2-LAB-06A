const express = require('express');
const { cars } = require('./data.js');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/cars/:id', (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    res.json(car);
})

app.get('/cars', (req, res) => {
    res.json(cars);
})

module.exports = { app };