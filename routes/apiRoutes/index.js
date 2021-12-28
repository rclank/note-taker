const router = require('express').Router();
let notes = require('../../db/db.json');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

// 2 routes needed, a 3rd bonus:

// GET /api/notes should read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

// POST /api/notes should receive a new note to save on the request body, add it to
// the db.json file, and then return the new note to the client. You'll need to find
// a way to give each note a unique id when it's saved (look into npm packages that
// could do this for you)
router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes, null, 2));
    res.json(note);
});

// Bonus:
// DELETE /api/notes/:id should receive a query parameter containing the id of a note
// to delete. In order to delete a note, you'll need to read all notes from the db.json
// file, remove the note with the given id property, and then rewrite the notes to the
// db.json file
router.delete('/notes/:id', (req, res) => {
    const deleteId = req.params.id;
    const deleteNote = notes.filter((note) => note.id === deleteId)[0];
    notes = notes.filter((note) => note.id !== deleteId);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes, null, 2));
    res.json(deleteNote);
});

module.exports = router;