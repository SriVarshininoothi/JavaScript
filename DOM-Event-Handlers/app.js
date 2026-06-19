
const box = document.getElementById("container");

box.innerHTML = "<h4> Enter Element </h4>"
box.textContent = "<h6> Enter Element </h6>"

//dynamic
let product = {
    name:"HP Laptop",
    price : 45000,
    address : {
        city:"hyderabad"
    }
}


box.innerHTML = `<h2> ${product.name}</h2>`
box.innerHTML = `<h3> ${product.address.city} </h3>`
box.textContent = "Hello world"

//Style Manipulation

const title = document.getElementById("title");

title.style.color="pink";
title.style.backgroundColor = "purple";
title.style.padding ="20px";

//classlist

document.body.classList.add("white");

box.classList.add("active");
box.classList.remove("active");

box.classList.toggle("active"); //switches bg color
box.classList.contains("active");

//event

const inputF = document.getElementById("text");
inputF.oninput = function(event) {
    console.log("User name : "+event.target.value)

}

inputF.addEventListener("keyup", (event) => {
    let currentvalue = inputF.value.trim();
    if(currentvalue === ""){
    alert("Enter value");
    }else{
        inputF.value= event.target.value;
    }

});

const button = document.getElementById("btn");

button.onclick= function() {
    alert("Hello");
}



button.onmouseover=function(){
    button.style.color="red";
}
button.onmouseout = function() {
    button.style.color = "blue";
};


button.addEventListener("click" , function(){
console.log("Clicked");
});



const btn = document.getElementById("themeBtn");

btn.addEventListener("click", function(){
document.body.classList.toggle("dark");
});



//counter

let count = 0;
const display = document.getElementById("counter");
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");


display.addEventListener("click", () => {
    display.textContent=count;

});


increment.addEventListener("click",() =>{
    count++;
    display.textContent=count;
    display.style.color="Green";
    display.style.fontSize="20px";
    display.style.fontWeight="bold";
});

decrement.addEventListener("click",() =>{
    count--;
    display.textContent=count;
    display.style.color="Red";
    display.style.fontSize="20px";
    display.style.fontWeight="bold";
})



reset.addEventListener("click", () => {
    count=0;
    display.style.color="black";
    display.textContent=count;
});

