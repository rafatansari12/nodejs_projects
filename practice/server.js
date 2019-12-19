//**********UNDERSTANDING CLIENT AND SERVER COMMN*******//
// Client send a request + request header to server
// Server responds back with a response + response header
// Every header has two imp parameters -> Status code , Content-Type
// Status code = 200 means response received succesfully
// Status code = 404 means there is an error
// Content-Type means what kind of reponse has been received. EG. Plaintext, JSON, XML,etc.


//requiring http module
var http = require('http');

//creating server
var server = http.createServer(function(req,res){
  console.log('request was made to url : '+req.url);
  //set header to receive your desired kind of response
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hey ninjas');
});

//Listening for the response
//server.listen(port no, IP address)
server.listen(4000,'127.0.0.1');
console.log('Listening to port 4000....');
