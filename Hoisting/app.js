//var

console.log(a);
var a= 100;

//let and const = TDZ

console.log(b);
let b = "hello";


console.log(pi);
const pi = 3.14;


// function declare
greet();
console.log(greet);
function greet(){
    console.log("Good Morning");
}


//function expression

f();
var f = function(){
    console.log("hello");
}

