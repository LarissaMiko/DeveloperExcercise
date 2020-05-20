const express = require('express');
const bodyParser = require('body-parser');
const settings = require('../settings');
const cors = require('cors')

const app = express();

// Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

const port = settings.serverPort;
app.listen(port, () => console.log(`Server started on port ${port}`))

//Endpoints
// 
app.get('/convertaudio', cors(), async (req,res) => {
    //get audio from post-request and give it as input to a function correctaudio() that
    //first: transforms audio into text
    //second: corrects text gramatically 
    //third: transforms it back to audio

    res.sendStatus(200);
})