//Array

let names = ["Shinchan","Heidi","Doremon","Nobitha"];

console.log(names[0]);

console.log(names[1]);

console.log(names[2]);

console.log(names[3]);

//push() - add at last

names.push("Kazama");
console.log(names);

//pop - remove at last

names.pop();
console.log(names);

//unshift - Add at first/start

names.unshift("Jackiechan");
console.log(names);

//shift - remove at start

names.shift();
console.log(names);

//length

console.log("Length of names: "+names.length);

//splice() - Modify the original array
//array.splice(start,deletecount,items)

//remove
let fruits = ["Apple","Mango","Orange"];
fruits.splice(1,1);
console.log(fruits);

//add 
fruits.splice(1,0,"Banana");
console.log(fruits);

//replace
fruits.splice(1,1,"Grapes");
console.log(fruits);

//slice() - shallow copy of a portion of an array, with out modifying the original
//array.slice(start,end);


let colours = ["Red","blue","Green","Orange","Yellow"];
let res = colours.slice(1,3);
console.log(res);

console.log("Length of fruits: "+fruits.length);
console.log("Length of result: "+res.length);


