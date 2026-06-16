
const heading = document.getElementById("title");
heading.style.color="white";
heading.style.backgroundColor="purple";
heading.style.fontSize="30px";
heading.style.padding="10px";

const subheading = document.querySelector("h3");
subheading.style.color="Green";

const para = document.querySelector(".defintion");
para.style.color="pink";

const q = document.querySelectorAll("p");
q[0].style.color="red";
q[1].innerText = "Dynamic Content = DOM"
q[1].style.color="blue";

let message = document.getElementById("message");

function change(){
    message.innerText="The DOM acts as an API (Application Programming Interface) that allows JavaScript to change the page after it has loaded.";
    message.style.color="brown";
}

