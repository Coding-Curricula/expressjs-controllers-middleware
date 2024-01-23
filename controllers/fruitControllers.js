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

// GET all fruits
getAllFruits = (req, res) => {
    try {
        res.send(fruits);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// GET fruit by id
getFruitById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const fruit = fruits.find(f => f.id === id);
        if (fruit) {
            res.send(fruit);
        } else {
            res.status(404).send('Fruit not found');
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// POST new fruit
addNewFruit = (req, res) => {
    try {
        const body = req.body;
        const id = fruits.length + 1;
        const fruit = {
            id,
            ...body
        };
        fruits.push(fruit);
        res.send(fruit);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// PUT fruit by id
updateFruitById = (req, res) => {
    try {
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
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// DELETE fruit by id
deleteFruitById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const fruit = fruits.find(f => f.id === id);
        if (fruit) {
            fruits.splice(fruits.indexOf(fruit), 1);
            res.send(fruit);
        } else {
            res.status(404).send('Fruit not found');
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

module.exports = {
    getAllFruits,
    getFruitById,
    addNewFruit,
    updateFruitById,
    deleteFruitById
}