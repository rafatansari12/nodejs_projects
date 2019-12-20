var http = require('http');
var fs = require('fs');
console.log(__dirname);

//***To read a stream of the actual data chunks in the buffer***//
//var readStream = fs.createReadStream(__dirname + '/largefile.txt','utf8');
//***To read a stream of code words for the chunks of data in the buffer***//
var readStream = fs.createReadStream(__dirname + '/largefile.txt');

//***To write a stream of data to another file***//
var writeStream = fs.createWriteStream(__dirname + '/newlargefile.txt');


//******READ STREAM AND WRITE STREAM******//

// Method 1: The hard way
//'data' is the predefined name of the event. Don't change it!
/*readStream.on('data', function(chunk){
  console.log('NEW DATA CHUNK RECEIVED'); //console.log(chunk);
  writeStream.write(chunk);
});*/

// Method 2: The easy way 'Use pipes'
readStream.pipe(writeStream);
