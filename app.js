let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = [ "rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "rgb(8, 8, 83)";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("YOU WIN :)");
        msg.innerText = `Hurray! You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("YOU LOSE :(");
        msg.innerText = msg.innerText = `Oh no :( You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    };



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice;
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice)
        {
            // Draw game
            drawGame();
        } else
        {
            let userWin = true;
            if(userChoice === "rock") {
                //scissors, paper
                userWin = compChoice === "paper" ? false : true;
            } else if(userChoice === "paper") {
                //rock, scissors
               userWin = compChoice === "scissors" ? false :true ;
            } else {
                //rock, paper
                userWin = compChoice === "rock" ? false :true ;
            }
            showWinner(userWin, userChoice, compChoice);
            
        }
    };

    

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
