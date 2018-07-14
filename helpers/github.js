const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github+json'
    }
  };
  
  request(options, (error, response) => {
    if (error) {
      console.log(error, 'Github'); 
    } else {
      callback(null, response.body);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;
