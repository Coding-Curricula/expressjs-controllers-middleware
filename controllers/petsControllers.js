const pets = [
    {
        id: 1,
        name: 'Fido',
        breed: 'Labrador',
        color: 'Brown',
        gender: 'Female',
        age: 2
    },
    {
        id: 2,
        name: 'Buddy',
        breed: 'Tabby',
        color: 'Black',
        gender: 'Male',
        age: 1
    },
    {
        id: 3,
        name: 'Bacon',
        breed: 'Pig',
        color: 'Pink',
        gender: 'Male',
        age: 3
    }
]

// GET all pets
getAllPets = (req, res) => {
    try {
        res.send(pets);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// GET pet by id
getPetById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const pet = pets.find(p => p.id === id);
        if (pet) {
            res.send(pet);
        } else {
            res.status(404).send('Pet not found');
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// POST create a new pet
createNewPet = (req, res) => {
    try {
        const id = pets.length + 1;
        const pet = {
            id,
            name: req.body.name,
            breed: req.body.breed,
            color: req.body.color,
            gender: req.body.gender,
            age: req.body.age
        };
        pets.push(pet);
        res.send(pet);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// PUT update a pet by id
updatePetById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const pet = pets.find(p => p.id === id);
        if (pet) {
            pet.name = req.body.name;
            pet.breed = req.body.breed;
            pet.color = req.body.color;
            pet.gender = req.body.gender;
            pet.age = req.body.age;
            res.send(pet);
        } else {
            res.status(404).send('Pet not found');
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// DELETE remove a pet by id
deletePetById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const pet = pets.find(p => p.id === id);
        if (pet) {
            pets.splice(pets.indexOf(pet), 1);
            res.send(pet);
        } else {
            res.status(404).send('Pet not found');
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}


// export all controller functions
module.exports = {
    getAllPets,
    getPetById,
    createNewPet,
    updatePetById,
    deletePetById
}