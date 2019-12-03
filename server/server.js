const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {

    res.send('Hello from server');
});

app.post('/enroll', function(req, res) {
    debugger
    console.log(req.body);
    //res.status(200).send({ "message": "data  received" });
    res.status(401).send({ "message": "data  received" }); // for error handling sample
});

app.listen(PORT, function() {
    console.log("server running on localhost" + PORT);
})