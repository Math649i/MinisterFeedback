
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Dette er en helt standard test rute
router.get('/status', (req, res) => {
    console.log("GET /persons/status reached");
    res.send('Test fungerer');
});

// GET /persons - Henter alle personer
// Kalder controllerens getAllPersons-metode

router.get('/', (req, res) => {
    console.log("GET /persons reached");
    personController.getAllPersons(req, res);
});
// GET /persons/:id - Henter en enkelt person baseret på ID
// Bruger route-parameteren :id til at finde en specifik person

router.get('/:id', (req, res) => {
    console.log(`GET /persons/${req.params.id} reached`);
    personController.getPersonById(req, res);
});
// POST /persons - Tilføjer en ny person til databasen
// Dataen sendes i anmodningens body

router.post('/', (req, res) => {
    console.log("POST /persons reached");
    personController.createPerson(req, res);
});

// PUT /persons/:id - Opdaterer en eksisterende person baseret på ID
// Dataen til opdatering sendes i anmodningens body

router.put('/:id', (req, res) => {
    console.log(`PUT /persons/${req.params.id} reached`);
    personController.updatePerson(req, res);
});

// DELETE /persons/:id - Sletter en person baseret på ID
// Bruger route-parameteren :id til at finde og slette personen

router.delete('/:id', (req, res) => {
    console.log(`DELETE /persons/${req.params.id} reached`);
    personController.deletePerson(req, res);
});

module.exports = router;
