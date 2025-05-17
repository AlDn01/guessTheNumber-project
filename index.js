const min = 0;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt(`guess a number between ${min} - ${max}`);
    guess = Number(guess);

    if (isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess > max || guess < min){
        window.alert(`I said enter a number between ${min} - ${max}`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`you are too LOW`);
        }
        else if(guess > answer){
            window.alert(`you are too HIGH`);
        }
        else{
            window.alert(`YAY you got it right the number is ${guess}, you got it in ${attempts} attempts`);
            running = false;
        }
    }
}