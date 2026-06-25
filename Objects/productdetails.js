
let product = {
    name:"Laptop",
    price:50000,
    brand:"HP"
};

//add a new 
product.model="Pavilion";
console.log(product);

//upadte price
product.price=67000;
console.log(product);

//delete a property
delete product.model;
console.log(product);

//destructuring

let {name,price,brand} = product;
console.log(product.name);

//spread

let updateproduct ={
    ...product,
    color:"Silver"
};
console.log(updateproduct);

//rest

let {color,...rem}=product;

console.log(rem);


//nested

let product1 = {
    name:"Laptop",
    price:50000,
    brand:"HP",
    specs:{
        ram:"16GB"
    }

};

console.log(product1.specs.ram);