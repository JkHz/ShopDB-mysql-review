const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));