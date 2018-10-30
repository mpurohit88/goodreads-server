const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const goodreadsapi = require('./config');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/search', function(req, res) {
    axios('https://www.goodreads.com/search/index.xml?key='+ goodreadsapi.key +'&q=' + req.query.q, {
        method: 'GET',
    }).then(result => {
        res.send(result.data);
    })
    .catch(err => console.log(err));
});
  

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);