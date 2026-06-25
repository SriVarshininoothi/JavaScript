//Creating an Object
let student = {
    name :"Sachin",
    age:21,
    course :"JS"
};

//accessing
console.log(student.name);
console.log(student.age);
console.log(student["course"]);

//update
student.age=23;
student.city = "Hyderabad";
console.log(student);

//delete
delete student.course;

//Nested Objects

let stud ={
    name:"Sachin",
    age:23,
    address:{
        city:"Hyderabad",
        state:"Telangana"
    }
};

console.log(stud.address.city);

//Object Methods
let stu = {
    name:"SriRam",
    greet:function(){
        console.log("Welcome");
    }
};
stu.greet();


const captials = {
    India:"New Delhi",
    telangana:"Hyderabad",
    maharastra:"Mumbai",
    location : function(){
        return "I live in " + this.telangana
    }
}

console.log(captials.location());


//Destructuring
let{name,age}=student;
console.log(name);
console.log(age);

//spread operator
//easy to copy or merge
let employee = {
    name:"Rahul",
    age:32
};
let updateEmp = {
    ...employee,
    city:"Chennai"
};
console.log(updateEmp);

//RestOperator
//Remaining values into single object after extracting properties
let E ={
    name:"Durga",
    age:23,
    city:"Hyderabad",
    state:"Telangana"
};

let {state,...others}= E;

console.log(others);

//object

let fruits = new Object();
fruits.apple = "red";
fruits.mango  = "yellow";
console.log(fruits);

document.write(fruits.apple);

