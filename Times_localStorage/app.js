//time

// setTimeout(function(){
//     console.log("Welcome Students");
// },2000);


let button = document.getElementById("btn");
let message = document.getElementById("message");


button.addEventListener("click", function () {

    setTimeout(function () {
        message.textContent = "Hello Js";

    }, 3000);
    message.textContent = "Welcome";
    console.log("Hi");

});



// setInterval(function(){
//     console.log("Running...");
// },1000);


// let timer = setInterval(function () {
//     console.log("Running");
// }, 1000);

// setTimeout(function () {
//     clearInterval(timer);
//     console.log("Stop");

// }, 5000);

//auto

let count=0;

let time = setInterval(function(){

    count++;
    console.log(count);
    if(count==5){
        clearInterval(time);
    }

},1000);

