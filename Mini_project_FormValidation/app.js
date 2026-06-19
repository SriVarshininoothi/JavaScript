
const form = document.getElementById("registrationForm");

form.addEventListener("submit" , function(event){
    event.preventDefault();

    let name = document.getElementById("text").value.trim() ;
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("number").value.trim();
    let password = document.getElementById("pass").value.trim();
    let result = document.getElementById("result");
   

  //regex

  let nameRegex = /^[A-Za-z]+$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phoneRegex = /^[0-9]{10}$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!?&%_]).{8,}$/;

  let isValid = true;

 //name regex validation

 if(!nameRegex.test(name)){
    const d = document.getElementById("nameError");
    d.innerText = "Enter Valid Name";
    d.style.color = "Red";
    isValid = false;

 }else{
    document.getElementById("nameError").innerText="";
 }

 //email regex validation

 if(!emailRegex.test(email)){
    const d =document.getElementById("emailError");
    d.innerText = "Enter Valid Email";
    d.style.color = "Red";
     isValid = false;

 }else{
    document.getElementById("emailError").innerText="";
 }

//phone regex validation

if(!phoneRegex.test(phone)){
    const d =document.getElementById("phoneError");
    d.innerText = "Enter 10 digit phone Number";
    d.style.color = "Red";
     isValid = false;


}else{
    document.getElementById("phoneError").innerText="";
 }

 //password regex validation

 if(!passwordRegex.test(password)){
    const d = document.getElementById("passwordError");
    d.innerText = "Password must contain uppercase, lowercase , number and special characters";
    d.style.color = "Red";
     isValid = false;

 }else{
    document.getElementById("passwordError").innerText="";
 }


 //success msg
if(isValid){
    result.textContent ="Register Successful!";
    result.style.color="Green";
    result.style.fontSize="20px";
    form.reset();


}else{

    result.textContent="Please fill all errors fields";
    result.style.color="Red";
    result.style.fontSize="18px";

}

});