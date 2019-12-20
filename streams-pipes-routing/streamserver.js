//*******SENDING READ STREAM DATA TO THE BROWSER INSTEAD OF WRITING STREAM TO A LOCAL FILE*******//
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
  console.log('request was made to url : '+req.url);

  //sending html template to browser
  res.writeHead(200,{'Content-Type': 'text/html'});
  var readStream = fs.createReadStream(__dirname + '/templates/index.html');
  readStream.pipe(res);     // 'response' is the write stream

                  //OR//

  //sending json-object to browser
  /*res.writeHead(200,{'Content-Type': 'application/json'});
  var obj = {
    name: 'Mario',
    job: 'Gamer',
    age: 45
  };
  // res.end(obj); You can't directly pass object like this. You need to convert it to string format.
  res.end(JSON.stringify(obj));*/
});

//Listening for the response
//server.listen(port no, IP address)
server.listen(4000,'127.0.0.1');
console.log('Listening to port 4000....');
