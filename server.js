const express = require('express'); // Correctly import express
const app = express(); // Create an instance of express
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

// Define a GET endpoint for /tshirt
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'abc',
        size: 'large'
    });
});

// Define a GET endpoint for /tshirt/:id
app.get('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        tshirt: `abc with id ${id}`,
        size: 'large'
    });
});

// Define a POST endpoint for /tshirt/:id
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo' });
    } else {
        res.send({
            tshirt: `abc with your ${logo}`,
        });
    }
});
