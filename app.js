//require and call express
var express = require('express');
var app = express();

//root(/) URL
app.get('/', function (req, res) {
//when we visit the root URL express will respond with 'Hello World'
  res.send('Hello World!');
});

//set port to 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});