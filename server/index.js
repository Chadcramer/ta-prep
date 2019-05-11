// libraries 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const database = require('../database/index.js');

// middleware 
    // body-parser 
    app.use(bodyParser.json());
    //CORS 
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

// routes
app.get('/tinder', (req, res) => {
    let myQuery = `SELECT * FROM twitter ORDER BY ID DESC;`
    database.query(myQuery, function (error, results) {
        if (error){
            console.log('post error from database: ', error);
        } else {
            console.log('post success from database:', results);
            res.send(results);
        }
    });

});

app.post('/tinder', (req, res) => {

    let myQuery = `INSERT INTO twitter (username, tweet)
    VALUES ("${req.body.username}", "${req.body.tweet}");`;

    database.query(myQuery, function (error, results) {
        if (error){
            console.log('post error from database: ', error);
        } else {
            console.log('post success from database:', results);
        }
    });
    res.send()
});

// listen 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
