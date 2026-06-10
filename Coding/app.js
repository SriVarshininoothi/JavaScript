//variables 

let name = "Varshini ";
let age = 23;
let city = " Hyderabad";
console.log(name+age+city);

//Add
let a =1;
let b = 2;
console.log(a+b);

//find datatype

console.log(typeof("Hello"));
console.log(typeof(100));
console.log(typeof(true));
console.log(typeof(undefined));

//swap
let p = 9;
let q = 10;
p = p+q;//19
q = p-q;//19-10 = 9
p = p-q; // 19-9
console.log(p);
console.log(q);

//operations
a =1;
b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(10%3);

//conditions

let n = 12;
if(n>0){
    console.log("Positive");
}else{
    console.log("Negative");
}

if(n%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

let n1 = 34;
let n2 =45;
if(n1>n2){
    console.log(n1);
}else{
    console.log(n2);
}

//loops

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

let j= 10;
while(j>=1){
    console.log(j);
    j--;
}

let k= 1;
while(k<=20){
    if(k%2==0){
        console.log("Even : "+k);
    }
    k++;
}


//sum

let w = 1;
let sum=0;
while(w<=4){
    sum+=w;
    console.log(sum);
    w++;
}

//function

