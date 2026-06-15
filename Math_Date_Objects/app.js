//math

console.log(Math.PI);

//random()
console.log(Math.random());

//floor

console.log(Math.floor(3.9));

//ceil
console.log(Math.ceil(3.9));

//round
console.log(Math.round(3.9));
console.log(Math.round(3.4));

//dice

let dice = Math.floor(Math.random()*6 + 1);
console.log(dice);

//dice game

for(let i=0;i<=10;i++){
    let di = Math.floor(Math.random()*6 + 1);
    console.log("Dices Game: "+di);
}

//otp generation
let otp ="";
for(let i=0;i<4;i++){
otp += Math.floor(Math.random()*10);

}
console.log("OTP Generation : "+ otp);



