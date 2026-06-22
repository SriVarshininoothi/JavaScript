
const themebtn = document.getElementById("themeBtn");

themebtn.addEventListener("change", function(){

    if(themebtn.checked){
        document.body.classList.add("dark");
    }
    else{
        document.body.classList.remove("dark");
    }
});