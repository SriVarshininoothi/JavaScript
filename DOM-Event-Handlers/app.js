
const box = document.getElementById("container");

box.innerHTML = "<h4> Enter Element </h4>"
//box.textContent = "<h6> Enter Element </h6>"


let product = {
    name:"HP Laptop",
    price : 45000,
    address : {
        city:"hyderabad"
    }
}


// box.innerHTML = `<h2> ${product.name}</h2>`
// box.innerHTML = `<h3> ${product.address.city} </h3>`
// // box.textContent = "Hello world"

// const title = document.getElementById("title");

// title.style.color="red";
// title.style.backgroundColor = "black";
// title.style.padding ="20px";


box.classList.add("active");
box.classList.remove("active");

box.classList.toggle("active"); //switches bg color
box.classList.contains("active");

const inputF = document.getElementById("text");
inputF.oninput = function(event) {
    console.log("User name : "+event.target.value)

}

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