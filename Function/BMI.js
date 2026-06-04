//bmi calculator

// bmi = weight/ height^2

function bmi(weight,height){
    let bmi = weight/(height*height);
    return bmi.toFixed(2);
}
let weight= 70;
let height = 1.75;
console.log("BMI= "+bmi(weight,height))