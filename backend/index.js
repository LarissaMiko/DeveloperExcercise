const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const settings = require('../settings');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const port = settings.serverPort;
app.listen(port, () => console.log(`Server started on port ${port}`))