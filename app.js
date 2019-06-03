//require and call express
var express = require('express');
var app = express();

//root(/) URL
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('index');
});


//set port to 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.set('view engine', 'ejs');