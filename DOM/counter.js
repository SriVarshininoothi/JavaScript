
let count = 0;
let value = document.getElementById("value");

let btn = document.querySelectorAll(".btn");
btn[0].style.border = "solid 2px";
btn[1].style.border = "solid 2px";

function increment() {

    count = count + 1;
    value.innerText = count;
    value.style.color = "Green";
    value.style.fontWeight = "bold";


}

function decrement() {
    
    count = count - 1;
    value.innerText = count;
    value.style.color = "Red";

}