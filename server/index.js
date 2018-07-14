const express = require('express');
const bodyParser = require('body-parser');
const github = require('../helpers/github.js')
const db = require('../database/index.js')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  github.getReposByUsername(req.body.term, function(err, results) {
    if (err) {
      console.log(err, 'server error');
    } else {
      results = JSON.parse(results);
      var data = [];  

      for (let i = 0; i < results.length; i++){
        let obj = {};

        obj.name = results[i].name;
        obj.url = results[i].url;
        obj.stars = results[i].stargazers_count;

        data.push(obj);
      } 

      for (let i = 0; i < data.length; i++) {
        console.log(data[i], 'we in da server')
        db.save(data[i]);
      }
    }
  });
  res.send();
});

app.get('/repos', function (req, res) {
  var obj = db.getRepos(function(err, results) {
    if (err) {
      console.log(err, 'get error in server'); 
    } else {
      console.log(results, 'Success Server Get');
      res.send(results);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

