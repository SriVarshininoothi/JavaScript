let cart =["Mobile","Laptop"];
console.log(cart)

//add
cart.push("Headphones");
cart.push("Tablet");
cart.push("Power Bank");
cart.push("Smart Watch");
cart.push("AC");
cart.push("Adapoter");
console.log(cart);


//remove
cart.pop();
cart.pop()
console.log(cart);


//shift

cart.shift();
console.log(cart);

//unshift

cart.unshift("Wirless Earbuds");
console.log(cart);

//splice
cart.splice(1,0,"Wired Keybord");
console.log(cart);

cart.splice(4,1);
console.log(cart);

cart.splice(1,1,"Smart Pen");
console.log(cart);


//slice()


let result = cart.slice(1,2);
console.log(result);

let res = cart.splice(0,4);
console.log(res);

