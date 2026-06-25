
//call backs

function greet() { // callback function
    console.log("hello");
}

function execute(callback) { //higher-order function
    callback();
}

execute(greet);




function wish() {
    console.log("Happy Birthday!");
}

setTimeout(function () {

    wish();

}, 1000);

 //Dom events and callbacks

 const button = document.getElementById("btn");

 button.addEventListener("click", function(){

    document.getElementById("result")
    .textContent = "Button Clicked";

 });


 //callstack

 console.log("A");
 console.log("B");
 console.log("C");


 //Web APIs and  callback queue

 console.log("Start");

 setTimeout(() => {

    console.log("Timer");
    
 }, 3000);

 console.log("End");


 //event loop and microtask queue

 console.log("Start");

 setTimeout(() => {
    console.log("timer");
 },0);

 Promise.resolve()
 .then(() => {
    console.log("Promise");

 });
 console.log("End");

 //error

 console.log(userName);


 try{
    console.log(userName);
 }catch(error){
    console.log("User not found");
 }