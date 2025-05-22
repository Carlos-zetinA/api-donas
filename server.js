const express = require('express');

const cors = require('cors');
const bodyparser = require('body-parser');
const producto = require('./routes/Donas.routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use (express.static('uploads'));

app.use(cors());
app.use('/api',producto)

module.exports = app;