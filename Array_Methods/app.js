

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


