const express = require('express');
const router = express.Router();

const fruitControllers = require('../controllers/fruitControllers');

// GET - /api/fruits - get all fruits
router.get('/', (req, res) => {
    fruitControllers.getAllFruits(req, res);
});

// GET - /api/fruits/:id - get fruit by id
router.get('/:id', (req, res) => {
    fruitControllers.getFruitById(req, res);
});

// POST - /api/fruits - create new fruit
router.post('/', (req, res) => {
    fruitControllers.addNewFruit(req, res);
});

// PUT - /api/fruits/:id - update fruit by id
router.put('/:id', (req, res) => {
    fruitControllers.updateFruitById(req, res);
});

// DELETE - /api/fruits/:id - delete fruit by id
router.delete('/:id', (req, res) => {
    fruitControllers.deleteFruitById(req, res);
});

module.exports = router;