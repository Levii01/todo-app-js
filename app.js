//require and call express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tasks = ["buy socks", "practise with nodejs"];
var completedTasks = ["finish jquery"];
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
//root(/) URL
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('index', { tasks: tasks, completedTasks: completedTasks });
});

function deleteTaskFromTasks(task) {
  tasks.splice(tasks.indexOf(task), 1);
}

//set port to 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

app.set('view engine', 'ejs');

app.post('/addtask', function (req, res) {
  var newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect("/");
});

app.post("/removetask", function(req, res) {
  var checkedTasks = req.body.check;
  //check for the "typeof" the different completed task, then add into the complete task
  if (typeof checkedTasks === "string") {
    completedTasks.push(checkedTasks);
    deleteTaskFromTasks(checkedTasks)
  } else if (typeof checkedTasks === "object") {
    checkedTasks.map( task => {
    completedTasks.push(task);
    deleteTaskFromTasks(checkedTasks)
    })
  }
  res.redirect("/");
});
