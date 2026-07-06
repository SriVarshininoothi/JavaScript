
//map
let pratice = [100,200,300];

let gst = pratice.map(
    (price)=>price*1.8
);

console.log(gst);


//products

const products = [
    {name:"Laptop",price:50000},
    {name:"phone",price:20000}
];
const names = products.map(
    product => product.name
);

console.log(names);  


//filter

let marks = [20,50,60,35,80,90];

let pass = marks
    .filter((mark)=> mark>=35)
    .sort((a,b) => a-b);


console.log(pass);


const pri = products
    .filter((a)=> a.price>=3000);
    console.log(pri);


//reduce

const price = [100,200,300];

const total = price.
        reduce(

            (inital,acc)=> inital+acc

        );

console.log(total);


const g = products
        .reduce((sum,product) => sum+product.price,0);
console.log(g); 


//Gadgets Data

const gadgets = [

    {name:"Laptop",price:50000},
    {name:"tablet",price:30000},
    {name:"phone",price:20000},
    {name:"earpods",price:8000},
    {name:"speaker",price:4000},
    {name:"Wireless Mouse",price:1000},
    {name:"headset",price:2000}
];


//map

const discounts = gadgets
        .map( (discount) => discount.price * 0.9);
console.log(discounts);

//filter

const limit = gadgets
        .filter((limits)=> limits.price>=10000)
        .sort((a,b)=> a.price-b.price);

console.log(limit);

//reduce

const calulateTotal = gadgets
            .reduce((sum,product) => sum+product.price,0);
console.log(calulateTotal);

