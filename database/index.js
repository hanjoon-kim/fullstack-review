const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
})

let repoSchema = mongoose.Schema({
  name: String,
  url: String,
  startgazers_count: Number
  
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (name, url, stargazers) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  Repo.create({name: name, url: url, startgazers_count: startgazers})
}

module.exports.save = save;