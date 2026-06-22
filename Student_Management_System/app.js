
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

//Array

let students = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    //input

    let nameInput = name.value.trim();
    let emailInput = email.value.trim();
    let phoneInput = phone.value.trim();
    let courseInput = course.value.trim();

    // Name Validation
    if (!nameRegex.test(nameInput)) {
        nameError.textContent = "Enter Valid Name";
        nameError.style.color = "red";
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    if (!emailRegex.test(emailInput)) {
        emailError.textContent = "Enter Valid Email";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "";
    }

    // Phone Validation
    if (!phoneRegex.test(phoneInput)) {
        phoneError.textContent = "Enter Valid 10 Digit Number";
        phoneError.style.color = "red";
    } else {
        phoneError.textContent = "";
    }

    // Course Validation
    if (!courseRegex.test(courseInput)) {
        courseError.textContent = "Enter Valid Course";
        courseError.style.color = "red";
    } else {
        courseError.textContent = "";
    }


    //check all validations

    if(
        nameRegex.test(nameInput) &&
        emailRegex.test(emailInput) &&
        phoneRegex.test(phoneInput)&&
        courseRegex.test(courseInput) 
    
    
    ){

        //object
        let student = {
            name:nameInput,
            email:emailInput,
            phone:phoneInput,
            course:courseInput

        };

        students.push(student);
        console.log(students);
        
        displayStudents();

        form.reset();

    }
});



function displayStudents(){

    let table = document.getElementById("studentTable");

    table.innerHTML= "";

    for(let i=0;i<students.length;i++){

        table.innerHTML += 
        
        `
            <tr>
            <td>${students[i].name}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].course}</td>

            </tr>

        `;
    }
}

