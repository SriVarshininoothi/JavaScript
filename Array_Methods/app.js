

//map
let pratice = [100,200,300];

let gst = pratice.map(
    (price)=>price*1.8
);

console.log(gst);


//products

const products = [{name:"Laptop",price:5000},
    {name:"phone",price:2000}
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