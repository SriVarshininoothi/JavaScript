
//birthday remainder

let birthday = new Date("2026-10-18"); // birthday date

let currentDate = new Date(); //today date

let milisecondsRemaining =  birthday-currentDate;  //js convert them into miliseconds

let daysRemaining = Math.ceil(milisecondsRemaining/(1000*60*60*24)); //convert miliseconds into hours 
// 1000ms * 60 sec * 60 min * 24 hours  

console.log("Birthday:",birthday.toDateString()); // Convert Date to String 
console.log("Today:",currentDate.toDateString());
console.log("Days Remainig: ",daysRemaining);

