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

function greet(){
    console.log("Hello JavaScript");
}
greet(); 

//add 

function add(a,b){
    return a+b;   
}
console.log(add(10,20));


//square

function sqaure(c){
 
    return c**2;

}
console.log(sqaure(5));


//odd even

function oddeven(d){
    if(d%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
    
}
oddeven(6);

//greater

function findgreater(x,y){
    if(x>y){
        console.log(x);
    }else{
        console.log(y);
    }
}
findgreater(8,9);


//array

let Mobiles  = ["Vivo","Samsung","Motorola","Redmi","Google"];

console.log(Mobiles[0]);
console.log(Mobiles[1]);
console.log(Mobiles[2]);
console.log(Mobiles[3]);
console.log(Mobiles[4]);

console.log(Mobiles.length);

//sum

let arr =[1,2,3,4];
let s = 0;
for(let i=0;i<arr.length;i++){
    s=s+arr[i];
}
console.log(s);


let lar = [10, 50, 20, 70, 30];
let min = lar[0];

for(let j=0;j<lar.length;j++){
    if(lar[j]> min){
        min=lar[j];
    }
}
console.log(min);