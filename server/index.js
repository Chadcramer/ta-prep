// libraries 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const database = require('../database/index');

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
app.get('/twitter', (req, res) => {
    let myQuery = `SELECT * FROM Tweets ORDER BY ID DESC;`;
    database.query(myQuery, function (error, results) {
        if (error){
            console.log('error getting database:', error);
            res.end();
        } else {
            res.send(results);
        }
      });
});

app.post('/twitter', (req, res) => {
    let myQuery = `INSERT INTO Tweets (username, tweet) VALUES ("${req.body.username}", "${req.body.tweet}");`;
    database.query(myQuery, function (error, results) {
        if (error){
            console.log('error posting to database:', error);
            res.end();
        } else {
            res.send('Success posting to database');
        }
      });
});

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

