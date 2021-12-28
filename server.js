const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// // parse incoming string or array data, if needed. note: app does not need this in current configuration
// app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// make files in public folder static resources
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});