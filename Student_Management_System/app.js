
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const course = document.getElementById("course");

//message
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let courseError = document.getElementById("courseError");

//form
let form = document.getElementById("myForm");



//regex
let nameRegex = /^[A-Za-z\s]+$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let phoneRegex = /^[0-9]{10}$/;
let courseRegex = /^[A-Za-z\s]+$/;

form.addEventListener("submit", (e) => {


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    let button = document.getElementById("button");

    e.preventDefault();

    //name validation
    if (!nameRegex.test(name)) {
        nameError.textContent = "Enter Valid Name";
        nameError.style.color = "Red";
    } else {
        nameError.textContent = "";
    }
    //email Validation
    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter Valid email";
        emailError.style.color = "Red";
    } else {
        emailError.textContent = "";
    }
    //phone validation
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Enter valid number contains 10 digits";
        phoneError.style.color = "Red";
    } else {
        phoneError.textContent = "";
    }

    //course validation
    if (!courseRegex.test(course)) {
        courseError.textContent = "Enter Valid course";
        courseError.style.color = "Red";
    } else {
        courseError.textContent = "";
    }

   

     button.addEventListener("change",function(){

    let table = document.getElementById("table");
    
    button.style.color="blue";
    


        
    });


});


