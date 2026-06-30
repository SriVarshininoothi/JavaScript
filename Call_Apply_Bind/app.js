
// const person = {

//     name:"varshini",
//     greet() {
//         console.log(this);
//     }

// }
// person.greet();



// //2 same objects

// const person1 = {
//     name:"harinath"
// }

// const person2 = {
//     name:"Kalyan"

// }

// function greet(){

//     console.log("  Good morning " + this.name);


//   }
// greet()


const emp1 = {
    name: "Kiranmai"

}

function greet(city,country){

    console.log(this.name,city,country);

}
greet.call(emp1,"khammam","India");

//call() = Borrow and use now

const student = {name:"Aruna"};

function introduce(city){
    console.log(this.name+" from "+city);
}

introduce.call(student,"Hyderabad")


//apply()
