// var hoisting
console.log(x);
var x = 50;


//let TDZ
console.log(y);
let y=100;

//function declaration
display();
function display(){
    console.log("Java Script");
}

//function expression
display();
var display = function(){
    console.log("Js");
}