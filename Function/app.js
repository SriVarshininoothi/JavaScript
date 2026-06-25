//function

function greet(){
    console.log("Hello");
}
greet();

//example with parameter

function greet(name){
    console.log("Hi i am "+name);
}
greet("Js");

//mutiple parameter

function student(name,age){
    console.log(name,age);

}
student("Esha",8);

//return 

function add(a,b){
    return a+b;
}
let result = add(10,20);
console.log(result);

//arrow 

const great= ()=>{
    console.log("Hi");
}

const a = (a,b)=>{
    return a+b;
}

const d =(a,b)=> a+b;


//global scope
let marks= 12;
function score(){
console.log(marks);
}
score();