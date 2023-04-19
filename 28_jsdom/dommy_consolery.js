// Team Double A V2 :: Sasha Shifrina, Anna Fang
// SoftDev pd7
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-16
// --------------------------------------------------

//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x; // returns 30 + the input to function() 
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024, // no quotes 
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

// adds (appending) new element to the end of a list
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

// removes element at index n
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

// makes the end caps red 
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

// adding alternating "red" and "blue" endcaps 
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
        return(n);
    }
    else{
        return fib(n-1) + fib(n-2);
    }
}

// console.log(fib(9));
// console.log(fib(12));

// FAC
function fact(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * fact(n-1);
    }

}

// console.log(fact(9));
// console.log(fact(12));

// GCD
function gcd(x, y){
  while(y) {
    var temp = y;
    y = x % y;
    x = temp;
  }
  return x; 
}

// console.log(gcd(3, 9));
// console.log(gcd(14,6));

// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => { // "shorter functions"; cannot be used as methods or constructors 
  // body
  return retVal;
};

// console.log(myFxn);

// rendering the function outputs using this information: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
 var a = "" + gcd(3,6); 
 var c = "" + fib(9); 
 var b = "" + fact(9); 
document.getElementById("GCD").innerHTML = "gcd(3,6) = " + a;
document.getElementById("FIB").innerHTML = "fib(9) = " + c;
document.getElementById("FACT").innerHTML = "fact(9) = " + b; 

