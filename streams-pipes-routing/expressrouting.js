// requiring 'express' module (installed)
var express = require('express');
// requiring 'body-parser' middleware
var bodyParser = require('body-parser');

// Accessing all the express methods using a variable
var app = express();

// setting the view engine as ejs - embedded js (installed)
app.set('view engine','ejs');

//***************Never used**************//
// create application/json parser
/*var jsonParser = bodyParser.json();
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
});*/

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Using middleware framework to use stylesheet -kinda useless
/*app.use('/assets',function(req,res,next){               // next parameter is used to tell we've finished using current middleware hence, go to next middleware
  console.log(req.url);
  next();
});*/

//******HANDLING THE STYLESHEET USING MIDDLEWARE******//
// We need to use the middleware because stylesheet was not recognized (status - 404) by nodejs (even when proper link was added)
// app.use(<path you want to server as middleware>, express.static(<folder you want to serve as middleware>))
app.use('/assets',express.static('assets'));

//******UNDERSTANDING HTTP REQUEST METHODS******//
// HTTP methods are used to transfer data from client to server in HTTP protocol.
// Method 1: GET --> carries request parameter appended in URL string.
// Method 2: POST --> carries request parameter in message body which makes it more secure.
// Method 3: DELETE  // Method 4: PUT

//******RESPONDING TO REQUESTS******//
// Method 1: GET --> app.get('route', function(req,res){})
// Method 2: POST --> app.post('route', function(req,res){})
// Method 3: DELETE --> app.delete('route', function(req,res){})

app.get('/',function(req,res){
  //res.send('This is the home page'); For just sending string
  //res.sendFile(__dirname + '/templates/index.html');
  res.render('index');
});

app.get('/contact',function(req,res){
  //res.send('This is the contact page');
  //res.sendFile(__dirname + '/templates/contact.html');
  //console.log(req.query);     //url: http://localhost:4000/contact?name=rafat&location=pune // query string = { name: 'rafat', location: 'pune' }
  res.render('contact', {qs: req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
  //console.log(req.body);
  res.render('contact-success', {data: req.body});
});

//******USE OF EXPRESS PARAMS******//
// accessing url with different names or ids
app.get('/profile/:name',function(req,res){
  //res.send('You are viewing the profile of : ' +req.params.name);
  var data = {age:25, loc:'Mumbai',course: ['ADMT','ADSA','NODEJS']};
  // To view the ejs file from view folder - use res.render('<ejs filename>',{data name : data sent})
  res.render('profile',{person: req.params.name, moreinfo : data});
});

// listening to port 4000
app.listen(4000);
