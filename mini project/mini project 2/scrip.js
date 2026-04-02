let userScore =0;
let compScore =0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#comp-score");
//for computer choice
const genComputerChoice = () => {
    const options = ["rock" ,"paper" , "scissor"];
  const randIdx =  Math.floor(Math.random()*3);
  return options[randIdx];
};
const drawGame = () => {
    
    msg.innerText = "Game was Draw, play again.";
      msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, ComputerChoice) => {
    if(userWin) {
        userScore++;
        userScorep.innerText = userScore;
        
    msg.innerText = `You Win!  Your ${userChoice} beats ${ComputerChoice}`;
  msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorep.innerText= compScore;
        
            msg.innerText = `You loose.  ${ComputerChoice} beats Your ${userChoice}`;
              msg.style.backgroundColor = "red";
   }
};


const playGame = (userChoice) => {
console.log("user choice = ", userChoice);
const ComputerChoice =genComputerChoice();
console.log("computer choice = ", ComputerChoice);

if(userChoice === ComputerChoice) {
    //draw game
    drawGame();
}
else {
   let userWin = true;
   if(userChoice === "rock"){
    //scr, paper
    userWin = ComputerChoice ==="paper" ? false: true;
   }
   else if(userChoice ==="paper") {
//rock, scr
 userWin = ComputerChoice ==="scissors"?false:true;
   } else {
    //rock paper
   userWin =  ComputerChoice ==="rock" ? false:true;
   } 
   showWinner(userWin, userChoice, ComputerChoice);
}
};

//for users
 choices.forEach((choice) => {  
        choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
