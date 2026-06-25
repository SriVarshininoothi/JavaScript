const form = document.getElementById("FormSubmit");
const InputEmail = document.getElementById("email");
const InputPassword = document.getElementById("password");
const button = document.getElementById("button");

const ErrorMsgEmail = document.getElementById("emailError");
const ErrorMsgPass = document.getElementById("passError");
const result = document.getElementById("result");

//form validate

form.addEventListener("submit",(event) => {

    event.preventDefault();

    const email = InputEmail.value.trim();
    const password = InputPassword.value.trim();

    if(email != "" && password != ""){
        result.textContent = "Login Successful!";
        result.style.color="Green";
        result.style.fontSize="20px";
    }else{
        result.textContent="Please fill in the both fields!";
        result.style.color="Red";
         result.style.fontSize="20px";
         button.classList.remove("butt");
    }



//email validate

InputEmail.addEventListener("input",function(){

    const email = InputEmail.value.trim();

    if(email === ""){
        ErrorMsgEmail.textContent="Enter a Email";
        ErrorMsgEmail.style.color = "Red";

    }else{
        ErrorMsgEmail.textContent="";
    }

});

InputPassword.addEventListener("input",function(){

    const password = InputPassword.value.trim();

    if(password === ""){
        ErrorMsgPass.textContent="Enter a Password";
        ErrorMsgPass.style.color = "Red";

    }else{
        ErrorMsgPass.textContent="";

    }

});

button.addEventListener("click",() => {

   button.classList.add("butt");
  


});


});