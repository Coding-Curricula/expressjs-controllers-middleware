const express = require('express');
const router = express.Router();

const fruitControllers = require('../controllers/fruitControllers');
const someMiddlewares = require('../middlewares/someMiddlewares');

// GET - /api/fruits - get all fruits
router.get('/', someMiddlewares.routeMiddleware, fruitControllers.getAllFruits);

// GET - /api/fruits/:id - get fruit by id
router.get('/:id', someMiddlewares.routeMiddleware, fruitControllers.getFruitById);

// POST - /api/fruits - create new fruit
router.post('/', someMiddlewares.authMiddleware, fruitControllers.addNewFruit);

// PUT - /api/fruits/:id - update fruit by id
router.put('/:id', someMiddlewares.authMiddleware, fruitControllers.updateFruitById);

// DELETE - /api/fruits/:id - delete fruit by id
router.delete('/:id', someMiddlewares.authMiddleware, fruitControllers.deleteFruitById);

module.exports = router;