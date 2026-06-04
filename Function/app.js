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

const greet= ()=>{
    console.log("Hi");
}

const add = (a,b)=>{
    return a+b;
}

const add =(a,b)=> a+b;


