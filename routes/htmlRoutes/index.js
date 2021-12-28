// 2 routes needed:
const path = require('path');
const router = require('express').Router();

// how is the home page index.html served back without a defined route?
// this works even without the catch-all route at the end

// GET /notes should return the notes.html file
router.get('/notes', (req ,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// GET * should return the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;