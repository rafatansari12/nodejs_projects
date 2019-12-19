var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');

//dummy data
//var data = [{item:'get milk'},{item: 'walk dog'},{item:'learn coding'}];

//connect to db
mongoose.connect("mongodb+srv://dbuser1:dbuser1@todo-ed8o6.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true });

// create a schema - this is like a blueprint // Defines the type of the data being handled
var todoSchema = new mongoose.Schema({
  item: String
});

// create a model or collection named Todo
var Todo = mongoose.model('Todo', todoSchema);

// adding item to collection directly via code - no front-end interfacing
/*var item1 = Todo({item: 'read books'}).save(function(err){
  if (err) throw err;
  console.log('item saved');
});*/

module.exports = function(app){

app.get('/todo',function(req,res){
  // get data from mongodb and pass it to the view

  // If you want to find a specific item in collection
  //Todo.find({item:'read books'});

  // If you want all items of collection
  Todo.find({}, function(err,data){
    if (err) throw err;
    res.render('todo',{todo:data});
  });
  // earlier res.render('todo',{todo:data});
});

app.post('/todo', urlencodedParser, function(req,res){
  // get data from view and add it to mongodb
  var newTodo = Todo(req.body).save(function(err,data){
    if (err) throw err;
    res.json(data);
  });
  // earlier
  /*data.push(req.body);      //push the data of req.body to the data array.
  res.json(data); */
});

app.delete('/todo/:item',function(req,res){
  // delete the requested item from mongodb
  Todo.find({item: req.params.item.replace(/\-/g," ")}).deleteOne(function(err,data){
    if (err) throw err;
    res.json(data);
  });
  // earlier
  /*data = data.filter(function(todo){
    return todo.item.replace(/ /g,'-') !== req.params.item;
  });
  res.json(data);*/
});

};
