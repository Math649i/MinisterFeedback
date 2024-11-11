// app.js
const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');
const logger = require('./middleware/logger');
const app = express();

// Brug logger middleware
app.use(logger);

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Serveren kører og svarer!');
});

// MongoDB forbindelse,
mongoose.connect('mongodb://localhost:27017/Folketinget', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Forbundet til MongoDB'))
    .catch(error => console.error('Kunne ikke forbinde til MongoDB:', error));

app.use('/persons', personRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server kører på port ${PORT}`));
