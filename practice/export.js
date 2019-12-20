//**********EXPORTING FUNCTIONS GLOBALLY***********//

var arrlength = function(a){
  for(i=0;i<a.length;i++){
    console.log(a[i]);
  }
  return 'There are '  + a.length +' elements in the array';
}

//ONE WAY to EXPORT 'adder' function globally
module.exports.adder = function(x,y){
  return `The sum of 2 nos is ${x+y}`;
}

var areaCir = function(r){
  return `Area of circle = ${Math.PI*Math.pow(r,2)}`;       //Ecma script 6
}

var g = 9.8;

//l=[5,2,7,'ee']
//console.log(arrlength(l));
//console.log(adder(8,9.5));
//console.log(areaCir(3));

// If there is just one function in file you can use this to export it
//module.exports = arrlength;

// If there are multiple functions in file you can export them like below
module.exports.arrlength = arrlength;
module.exports.areaCir = areaCir;
module.exports.g = g;
