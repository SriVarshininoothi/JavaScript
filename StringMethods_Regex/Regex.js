//Regular Expression

// let email = prompt();

// if(email.includes("@")){
//     console.log("Valid Email");
// }
// else{
//     console.log("Invalid Email");
// }
 

//Regular Expression = a pattern checking tool.

let pattern = /^[0-9]+$/;
console.log(pattern.test("12345"));

let pattern1 = /^[A-Za-z]+$/;
console.log(pattern1.test("Shinchan"));

//password 

let password = "Pass1234";

if(password.length>=8){
    console.log("Strong Password");
}else{
    console.log("Weak Password");
}

//Advanced

let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
console.log(passwordpattern.test("shinchan12"));

console.log(passwordpattern.test("Rahul"));

//username

let usernamepattern = /^[A-Za-z0-9]{5,}$/;
console.log(usernamepattern.test("rahul123"));

