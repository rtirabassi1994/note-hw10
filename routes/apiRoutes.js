const router = require("express").Router();
const store = require("../db/db.json");
// const store = require("..db/store");
//require in the fs
const fs = require('fs');
//require in uuid *google uuid*
// var uuid = require('uuid');
// 


router.get("api/notes", (req, res) => {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
    // this is the GET route where your will you 
    // will utilize the getNMotes() function

    //read your file/db with fs

    //respond with store as a json
    res.json(tableData);

});

router.post("api/notes", (req, res) => {
    store
        .addNote(req.body)
        .then(note) => res.json(note))
        .catch(err => res.status(500)).json(err));
    // this is the POST route where your will you 
    // will utilize the addNotes() function

    //read file 

    //set an id with uuid

    //make a newNote var with req.body and id

    //push the newNote to store

    //write to the db.json file

    //respond with store as a json

});

router.delete("api/notes/:id", (req, res) => {
    store
    .removeNote(req.params.id)
    // this is the delete route where you will
    // utilize the removeNote() function

    //read file

    //set the params id to a variable

    //make some logic to loop through json entries and *splice* out entry
        //write file

    //respond with store as a json
})

module.exports = router;