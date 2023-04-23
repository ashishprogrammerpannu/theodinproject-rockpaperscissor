let userChoice = prompt("What is your choice?","r");
let ran = Math.floor(Math.random()*3);
// Determing the computerChoice
let computerChoice = "r";
if(ran==1){
    computerChoice = "p";
}
else if(ran==2){
    computerChoice = "s";
}
// Main logic of the game
if(userChoice=="r"){
    switch (computerChoice) {
        case "r":
            console.log("TIE");
            break;

        case "p":
            console.log("YOU LOST TO PAPER");
            break;
        case "s":
            console.log("YOU WON TO SCISSORS");
            break;
    }
}

else if(userChoice=="p"){
    switch(computerChoice){
        case "r":
            console.log("YOU WON TO ROCK");
            break;
        case "p":
            console.log("TIE");
            break;
        default:
            console.log("YOU LOST TO SCISSORS");
    }
}

else{
    switch(computerChoice){
        case "r":
            console.log("YOU LOST TO ROCK");
            break;
        case "p":
            console.log("YOU WON TO PAPER");
            break;
        default:
            console.log("TIE");
    }
}