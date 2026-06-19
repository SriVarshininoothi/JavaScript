
const username = document.getElementById("name");
const form = document.getElementById("myformid");
const button = document.getElementById("button");
const ErrorMsg = document.getElementById("result");

//display
username.addEventListener("keyup",function(){
    let value = username.value;
    console.log(value);
});

//form submit

form.addEventListener("submit", (event)=> {

    event.preventDefault();

    const usernameValidate = username.value.trim();
    if(usernameValidate === ""){
        ErrorMsg.textContent="Enter User name"
        ErrorMsg.style.color = "red";
        return;
    }
    ErrorMsg.textContent = `Welcome!! ${usernameValidate}`;
    ErrorMsg.style.color = "green"; 



});