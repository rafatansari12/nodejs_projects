// requiring the modules/controllers
var express = require('express');

var todoController = require('./controllers/todoController');

// accessing all express methods
var app = express();

// setting the template engine
app.set('view engine','ejs');

// serving static files using middleware
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(4000);
console.log("You're listening to port 4000......");
