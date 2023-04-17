/*
   your PPTASK:

   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.

    		Write with your future self or teammates in mind.

    		If you find yourself falling out of flow mode, consult
    		other teams
    		MDN

   A few comments have been pre-filled for you...

   (delete this block comment once you are done)
*/

// Team Double A V2 :: Sasha Shifrina, Anna Fang
// SoftDev pd7
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-16
// --------------------------------------------------

// DISCO
// -----------------------------------------------------------------
// *  console.log() sends a print call in the web console
// *  pressing enter in the web console displays all log function at the bottom of the screen
// *  console.log(myFxn) returns the body of the const
// *  Ctrt+Shift/Option+J will allow you to run JS in the browser!
// =================================================================
//
// QCC
// -----------------------------------------------------------------
// *  How can we employ the const myFxn? Can other functions envoke it?
// =================================================================


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
function fib(n){
    if(n<=1){
        return n;
    }
    else{
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(9));
console.log(fib(12));
// FAC
function fact(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * fact(n-1);
    }
}

console.log(fact(9));
console.log(fact(12));
// GCD
function gcd(x, y){
  while(y) {
    var temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

console.log(gcd(3, 9));
console.log(gcd(14,6));
// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};
console.log(myFxn);