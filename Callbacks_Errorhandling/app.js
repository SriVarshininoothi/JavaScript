
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
button.addEventListener("click", function () {

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
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");

});
console.log("End");

//error

//  console.log(userName);


try {
    console.log(userName);
} catch (error) {
    console.log("User not found");
} finally {
    console.log("Always Run");
}


//throw

// if (age < 18) {
//     throw new Error("Not Eligible");
// }

// priority
let testBtn = document.getElementById("testBtn");
let priorityResult = document.getElementById("priorityResult");

testBtn.addEventListener("click", () => {
    // Clear the placeholder "Waiting..." on click
    priorityResult.innerHTML = "";


    // 1. Synchronous Code (Runs immediately)
    priorityResult.innerHTML += "<div style='color:red;'>1. Normal code ran first!</div>";



    // 2. Promise / Microtask (Runs second)
    Promise.resolve().then(() => {
        priorityResult.innerHTML += "<div style ='color:blue;'>2. Promise ran second!</div>";
        priorityResult.style.color = "Red";
    });

    // 3. setTimeout / Macrotask (Runs last)
    setTimeout(() => {
        priorityResult.innerHTML += "<div style='color:green'>3. setTimeout ran last!</div>";
    }, 0);
});