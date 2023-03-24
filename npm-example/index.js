const request = require('request');
request(
  'http://jsonplaceholder.typicode.com/users',
  function(error, res, body) {
    console.log(body)
  }
)