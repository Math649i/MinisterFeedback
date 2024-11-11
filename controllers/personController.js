
const Person = require('../models/person');

// Henter alle personer
exports.getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Hent en enkelt person ved hjælp af personens  ID, det lange man får fra postman fx
exports.getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) return res.status(404).json({ message: 'Person ikke fundet' });
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// metode til at kunne tilføje en person, kan bruges i postman
exports.createPerson = async (req, res) => {
    const person = new Person({
        name: req.body.name,
        party: req.body.party,
        position: req.body.position,
        startDate: req.body.startDate
    });
    try {
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Opdater en person
exports.updatePerson = async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!person) return res.status(404).json({ message: 'Person ikke fundet' });
        res.status(200).json(person);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Slet en person
exports.deletePerson = async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if (!person) return res.status(404).json({ message: 'Person ikke fundet' });
        res.status(200).json({ message: 'Person slettet' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
