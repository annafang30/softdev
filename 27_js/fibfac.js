// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon 
// SoftDev pd0
// K27 -- Basic functions in JavaScript
// 2023-04-04t
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn

// n! = n*(n-1)
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

// Fn = f(n-1) + f(n-2)
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

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.