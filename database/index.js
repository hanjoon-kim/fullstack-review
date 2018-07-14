const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
})

var repoSchema = mongoose.Schema({
  // pkey: {type: String, unique: true },
  name: String,
  url: { type: String, unique: true },
  startgazers_count: Number
});

var Repo = mongoose.model('Repo', repoSchema);

repoSchema.index({ pkey: 1 }, { unique: true });


var save = (data) => {
  var instance = new Repo({name: data.name, url: data.url, stargazers_count: data.stars});
  instance.save(function(err) {
    if (err) {
      return console.error(err);
    }
  });
}

var getRepos = (response) =>{
  repos.find({}, function(response) {
    return function(err, data){
      if (err){
        console.log('error occured');
        return;
      }
      res.send('My repos are:\n');
      console.log(data);
    }
  });
}


module.exports.save = save;