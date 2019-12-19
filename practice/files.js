//***********WORKING WITH FILES************//
// requiring a module 'fs'-> file system
var fs = require('fs');

//***********SYNCHRONOUS FILE************//
//synchronous means 'completely read a file OR write a file and then only move to the next line of code'

//fs.readFileSync('existing filename','encoding');
var readtext = fs.readFileSync('read.txt','utf8');
console.log(readtext);

//fs.writeFileSync('new filename', 'text')
fs.writeFileSync('writeS.txt', readtext);
fs.writeFileSync('writeS.txt','You are an idiot.'); //writeMe.txt file is overwritten not appended.

//***********DELETING A FILE************//
//fs.unlinkSync('dump.txt');

//***********MAKING AND REMOVING DIRECTORIES************//
//fs.mkdirSync('syn');
//fs.rmdirSync('syn');


//***********ASYNCHRONOUS FILE************//
//asynchronous means 'read a file OR write a file while simultaneously executing other lines of codes'
//for asynchronous file operations using callback function () => {} OR function(){} is necessary.

fs.readFile('read.txt','utf8',function(err,data){
  console.log(err);   // If error exist : it prints error otherwise it prints null.
  console.log(data);  // If data exists : it prints data otherwise if error is true then data = undefined.
  //fs.writeFile('write.txt',data,(err)=>{ }); OR

  fs.writeFile('writeA.txt', data, (err) => {
  if (err) throw err;
  console.log('Async file is created!');
 });
});
console.log('Executing even when read file is not completed.');

//***********DELETING A FILE************//
//fs.unlink('writeAA.txt',()=>{});

//***********MAKING AND REMOVING DIRECTORIES************//
fs.mkdir('async',function(){
  fs.readFile('writeA.txt','utf8',function(err,data){
    fs.writeFile('./async/writeAA.txt',data,(err) => {
      if (err) throw err;
      console.log('Another Async file is created!');
    });
  });
});

// to delete a directory first make sure it is empty
/*fs.unlink('./async/writeAA.txt', () => {
  fs.rmdir('async', (err) => {
    if (err) throw err;
    console.log('Async directory deleted!');
  });
});*/
