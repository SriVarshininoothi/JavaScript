//math

console.log(Math.PI);

//random()
console.log(Math.random());

//floor
//down
console.log(Math.floor(3.9));

//ceil
//up
console.log(Math.ceil(3.9));

//round
//normally
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



//Date

let today = new Date();
console.log(today.getDate());


console.log(today.getFullYear());
console.log(today.getHours());

console.log(today.getTime());
console.log(today.getDay());
console.log(today.getMilliseconds());
console.log(today.getMonth());
console.log(today.getSeconds());

//Date formatting
//15/06/2026

let day = new Date();

console.log(day.getDate()+"/"+(day.getMonth()+1)+"/"+day.getFullYear());

//age
let birthyear = 2002;

let currentyear = new Date().getFullYear();

let age=  currentyear-birthyear;
console.log(age);


