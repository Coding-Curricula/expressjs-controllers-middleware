const express = require('express');
const router = express.Router();

const petsControllers = require('../controllers/petsControllers');
const someMiddlewares = require('../middlewares/someMiddlewares');

// GET - '/api/pets - get all pets
router.get('/', petsControllers.getAllPets);

// GET - '/api/pets/:id - get pet by id
router.get('/:id', petsControllers.getPetById);

// POST - /api/pets - create a new pet
router.post('/', someMiddlewares.authMiddleware, petsControllers.createNewPet);

// PUT - /api/pets/:id - update pet by id
router.put('/:id', petsControllers.updatePetById);

// DELETE - /api/pets/:id - delete pet by id
router.delete('/:id', petsControllers.deletePetById);

module.exports = router;