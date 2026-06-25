//Randomguess game

let number = 6;

let guess = Math.floor(Math.random() * 9 + 1);
if (guess == number) {
    console.log("Your are right");
} else {
    console.log("Try again!. The guess was: " + guess);
}

