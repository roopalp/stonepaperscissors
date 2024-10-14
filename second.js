let userScore = 0;
let compScore = 0;
let choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userscore= document.querySelector("#user-score");
let compscore= document.querySelector("#comp-score");




let genCompChoice=()=>{
let options=["rock","paper","scissors"];
let randIdx=Math.floor(Math.random()*3); // Math is a function and random is a method where *3 becz it give random value from 0.673, 1.938 ,2.649 like this if i give floor the 0,1,2 gives
return options[randIdx];
};
let drawGame=()=>{
    //console.log("game was draw");
    msg.innerText="Game was Draw. Play again"; //innerText and all will display on screen
    msg.style.backgroundColor="black"; //msg comes in black
}

let showWinner= (userWin,userchoice,compChoice)=> {
    if(userWin== true){
        userScore++;
        userscore.innerText= userScore;
       // console.log("you win");
       msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscore.innerText= compScore;
       // console.log("you lose");
       msg.innerText = `You lost! ${compChoice} beats Your ${userchoice}`;
       msg.style.backgroundColor="red";
    }
}

let playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    let compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userchoice===compChoice){
        // draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin= compChoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            //scissors,rock
            userWin= compChoice==="scissors"? false:true;
        }
        else if(userchoice==="scissors"){
            //paper,rock
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id"); // it returns the id name
        playGame(userchoice);
    });
});

