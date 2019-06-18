//require and call express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tasks = ["buy socks", "practise with nodejs"];

app.use(bodyParser.urlencoded({ extended: true }));
//root(/) URL
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('index', { tasks: tasks});
});


//set port to 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.set('view engine', 'ejs');

app.post('/addtask', function (req, res) {
  var newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect("/");
  // res.render('index')
});
