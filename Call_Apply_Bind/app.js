
const person = {

    name:"varshini",
    greet() {
        console.log(this);
    }

}
person.greet();

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


// apply() = Same Bike,Different Packing
// call() = One by One
// apply() = Whole bag

const stu = {name:"Kalyani"};
let info = ["Hyderabad","Developer"];


function introduce(city,role){
    console.log(this.name+" "+ city+" "+role);

}
introduce.apply(stu,info)

const fruits ={

    name:"Orange"
};

function snacks(color,kgs,tr){
    console.log(this.name +" "+ color +" "+ kgs+" "+tr);
}

snacks.call(fruits,"Orange",3,4);

//bind() = Borrow and Use Later

const person1 = {
    name:"Shinchan"
};

const person2 ={

    name:"Kazama"
};


function wish(){

    console.log(" Hello " + this.name);

}
const value = wish.bind(person1);
value()


//btn
const btn = document.getElementById("btn");

const user = {

    name:"Sri",
    showName(){
        alert(this.name);
    }
};

btn.addEventListener("click",user.showName);

btn.addEventListener("click", 
    user.showName.bind(user)
);

const empl1 = {

    name:"Rahul",
    role:"Developer"
};

const empl2= {

    name:"varun",
    role:"Tester"
}

function details(company){
    console.log(
        this.name + " "+ this.role +" "+ company
    );

}

//apply



details.call(empl1);
details.call(empl2);

let infom = ["xyz"];

details.apply(empl1,infom);

//bind

const rahulDetails =  details.bind(empl1,"Netflix");
rahulDetails();