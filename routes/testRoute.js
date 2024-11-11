




const express = require('express');
const router = express.Router();

router.get('/check', (req, res) => {
    console.log("Anmodning modtaget på /check");
    res.send('Test fungerer');
});

module.exports = router;


