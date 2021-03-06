const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
})

var repoSchema = mongoose.Schema({
  name: String,
  url: { type: String, unique: true },
  stars: Number
});

var Repo = mongoose.model('Repo', repoSchema);

repoSchema.index({ pkey: 1 }, { unique: true });


var save = (data) => {
  var instance = new Repo(data);
  instance.save(function(err) {
    if (err) {
      return console.error(err);
    }
  });
}

var getRepos = (callback) => {
  Repo.find(function(err, data){
    if (err){
      console.log('error occured');
    } else {
      callback(null, data);
    }
  });
}


module.exports.save = save;
module.exports.getRepos = getRepos;