const router = require("express").Router();
const fs = require("fs");



router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) res.sendStatus(500)
        res.json(data)
    })
});


module.exports = router