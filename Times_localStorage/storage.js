// //localStorage = Permenant

localStorage.setItem(
    "name","Shinchan",
);

localStorage.setItem(
    "age","5"
);

let q =  localStorage.getItem("name");
localStorage.getItem("age");

localStorage.removeItem("age");
console.log(q);
// //clear

// // localStorage.clear();

// //SessionStorage -  clear when browser close

sessionStorage.setItem(
    "city","Kasukabe"
);
let p = sessionStorage.getItem("city");
console.log(p);


//note app

const note = document.getElementById("note");
const save = document.getElementById("save");


save.addEventListener("click",()=>{
    localStorage.setItem(
        "note",note.value
    );
});