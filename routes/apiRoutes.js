// dependencies

const router = require("express").Router();
// const store = require("../db/db.json");
const store = require("../db/store");
//require in the fs
// const fs = require('fs');


router.get("/notes", (req, res) => {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));

});

router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
    // this is the POST route where your will you 
    // will utilize the addNotes() function

    //read file 

    //set an id with uuid

    //make a newNote var with req.body and id

    //push the newNote to store

    //write to the db.json file

    //respond with store as a json

});

router.delete("/notes/:id", (req, res) => {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
    // this is the delete route where you will
    // utilize the removeNote() function

    //read file

    //set the params id to a variable

    //make some logic to loop through json entries and *splice* out entry
        //write file

    //respond with store as a json
});

module.exports = router;