const express = require('express');
const router = express.Router();

const fruits = [
    {
        id: 1,
        name: 'Apple',
        color: 'Red',
        flavor: 'Sweet'
    },
    {
        id: 2,
        name: 'Banana',
        color: 'Yellow',
        flavor: 'Sweet'
    },
    {
        id: 3,
        name: 'Orange',
        color: 'Orange',
        flavor: 'Sweet'
    },
    {
        id: 4,
        name: 'Pear',
        color: 'Green',
        flavor: 'Sweet'
    },
    {
        id: 5,
        name: 'Grape',
        color: 'Purple',
        flavor: 'Sweet'
    }
]

// GET - /api/fruits - get all fruits
router.get('/', (req, res) => {
    res.send(fruits);
});

// GET - /api/fruits/:id - get fruit by id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fruit = fruits.find(f => f.id === id);
    if (fruit) {
        res.send(fruit);
    } else {
        res.status(404).send('Fruit not found');
    }
});

// POST - /api/fruits - create new fruit
router.post('/', (req, res) => {
    const body = req.body;
    const id = fruits.length + 1;
    const fruit = {
        id,
        ...body
    };
    fruits.push(fruit);
    res.send(fruit);
});

// PUT - /api/fruits/:id - update fruit by id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fruit = fruits.find(f => f.id === id);
    if (fruit) {
        const body = req.body;
        const updatedFruit = {
            ...fruit,
            ...body
        };
        fruits.splice(fruits.indexOf(fruit), 1, updatedFruit);
        res.send(updatedFruit);
    } else {
        res.status(404).send('Fruit not found');
    }
});

// DELETE - /api/fruits/:id - delete fruit by id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fruit = fruits.find(f => f.id === id);
    if (fruit) {
        fruits.splice(fruits.indexOf(fruit), 1);
        res.send(fruit);
    } else {
        res.status(404).send('Fruit not found');
    }
});

module.exports = router;