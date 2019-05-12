// libraries 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

// middleware
    // CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    // support parsing of application/json type post data
    app.use(bodyParser.json());
    //support parsing of application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/twitter', (req, res) => res.send('Hello get!'));
app.post('/twitter', (req, res) => res.send('Hello post!'));

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

