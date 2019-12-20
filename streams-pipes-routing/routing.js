var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
  console.log('request was made to url : '+req.url);

  if (req.url === '/home' || req.url === '/'){
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/templates/index.html').pipe(res);
} else if (req.url === '/contact'){
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/templates/contact.html').pipe(res);
} else if (req.url === '/api'){
  res.writeHead(200,{'Content-Type': 'application/json'});
  var obj = [{name:'Zeba', age:34},{name:'Harish',age:45}];
  res.end(JSON.stringify(obj));
} else{
  res.writeHead(404,{'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/templates/404.html').pipe(res);
}
});

//Listening for the response
server.listen(4000,'127.0.0.1');
console.log('Listening to port 4000....');
