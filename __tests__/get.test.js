const { app } = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);

it('the cars endpoint returns all cars', async () => {
    const cars = [
        {
            id: 1,
            make: "Tesla",
            model: "Model 3",
            releaseYear: 2017,
            stillProduced: true,
            energyType: "electric"
        },
        {
            id: 2,
            make: "Ford",
            model: "Mustang",
            releaseYear: 1964,
            stillProduced: true,
            energyType: "gas"
        },
        {
            id: 3,
            make: "Mazda",
            model: "Mazda3",
            releaseYear: 2003,
            stillProduced: true,
            energyType: "gas"
        },
        {
            id: 4,
            make: "Mazda",
            model: "Miata",
            releaseYear: 1989,
            stillProduced: true,
            energyType: "gas"
        },
        {
            id: 5,
            make: "Toyota",
            model: "Prius",
            releaseYear: 1997,
            stillProduced: true,
            energyType: "hybrid"
        }
    ];
    const response = await request.get('/cars');
    expect(response.body).toEqual(cars);
});

it('the cars endpoint returns the correct car when provided an id', async () => {
    const car = {
        id: 5,
        make: "Toyota",
        model: "Prius",
        releaseYear: 1997,
        stillProduced: true,
        energyType: "hybrid"
    };
    const response = await request.get('/cars/5');
    expect(response.body).toEqual(car);
});