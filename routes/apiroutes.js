const router = require("express").Router();
const fs = require("fs");
const notes = require('../db/db.json')


router.get('/notes', (req, res) => {
    res.json(notes)
});

router.post("/notes", function(req, res) {
    const newNote = req.body;
    console.log(newNote);
    newNote.id = parseInt(notes[notes.length-1].id)+1
    notes.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(notes),(err)=>{
        if(err) throw err
        res.sendStatus(200)
    });
});
router.delete("/notes/:id",(req, res)=>{
    const id = req.params.id
    var position = notes.findIndex(notez=> notez.id === parseInt(id))
    notes.splice(position, 1)
    fs.writeFile('./db/db.json', JSON.stringify(notes),(err)=>{
        if(err) throw err
        res.sendStatus(200)
    })
})

// router.delete?

module.exports = router