const express = require('express');
const fruitRoutes = require('./routes/fruitRoutes');

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/api/health', (req, res) => {
    res.send('It is alive!');
});

app.use('/api/fruits', fruitRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});