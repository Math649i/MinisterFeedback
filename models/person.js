


//tilsvarende model klassen, her laves skemaet som mongo tager imod

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: String, required: true },
    party: { type: String, required: true },
    position: { type: String, required: true, enum: ['minister', 'formand'] },
    startDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Person', personSchema);
