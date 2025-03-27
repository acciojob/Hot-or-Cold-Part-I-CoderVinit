let secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;
let previousDifference = null;

let button = document.createElement("button");
button.textContent = "Guess";
document.body.insertBefore(button,document.getElementById("respond"));

button.addEventListener("click",()=>{
	console.log(secretNumber)
	let userGuess = parseInt(document.getElementById("guess").value);
	let respondtext = document.getElementById("respond");


	if(isNaN(userGuess) || userGuess<1 || userGuess>100){
		respondtext.textContent = "Please enter a valid number between 1 and 100."
		return;
	}
	let currentDiff = Math.abs(userGuess - secretNumber);
	if(userGuess === secretNumber){
		respondtext.textContent = "🎉 Congratulations! You guessed the correct number!";
        return;
	}

	if(previousGuess === null){
		respondtext.textContent = userGuess > secretNumber ? "Guess Lower" :"Guess Higher";
	}
	else{
		if(currentDiff < previousDifference){
			respondtext.textContent = "Getting hotter " + (userGuess > secretNumber ? "Guess lower" : "Guess higher")
		}
		else{
			respondtext.textContent = "Getting colder " + (userGuess > secretNumber ? "Guess lower" : "Guess higher")
		}
	}
	previousGuess = userGuess;
    previousDifference = currentDiff;
})