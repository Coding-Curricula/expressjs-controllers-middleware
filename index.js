const express = require('express');
const fruitRoutes = require('./routes/fruitRoutes');
const petsRoutes = require('./routes/petsRoutes');

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/api/health', (req, res) => {
    res.send('It is alive!');
});

app.use('/api/fruits', fruitRoutes);
app.use('/api/pets', petsRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});