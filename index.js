console.log('hi');

const options =["rock","paper","scissors"];

function getComputerChoice(){
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
}
function checkWinner(playerSelection,computerSelection){
 if(playerSelection == computerSelection){
        return "Tie";
 }
 else if (
        (playerSelection == "rock" && computerSelection =="scissors")||
        (playerSelection =="scissors" && computerSelection =="paper")||
        (playerSelection =="paper" && computerSelection =="rock")
 ){
return "Player";
 } 
 else{
        return "Computer";
 }      
}

function playRound(playerSelection,computerSelection){
 const result= checkWinner(playerSelection,computerSelection)
 if(result =="Tie"){
        return "It's a Tie!"
 }
else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
}
else{
        return `You Lose! ${computerSelection} beats ${computerSelection}`
}
}

function getplayerchoice(){
        let validatedInput = false;
        while( validatedInput == false){
         const choice = prompt("Rock paper scissors");
         if(choice == null){
                continue;
         }
         const choiceInlower = choice.toLowerCase(); 
         if(options.includes(choiceInlower)){
                validatedInput =true; 
                return choiceInlower; 
        }
}
}
function game(){
       let scoreplayer = 0;
       let scoreComputer =0;
        console.log("welcome!")
        for (let i=0; i < 5; i++){
               const playerSelection = getplayerchoice();
               const computerSelection = getComputerChoice();
               
                console.log(playRound(playerSelection ,computerSelection));
                console.log("-------")
              if(checkWinner(playerSelection,computerSelection) =="Player" ){
                scoreplayer++;
              }
              else if(checkWinner(playerSelection,computerSelection) == "Computer")
               { scoreComputer++;}
              }
              
        console.log("Game Over")
        if(scoreplayer > scoreComputer){
         console.log("player was the winner");       
        }
else if (scoreplayer <scoreComputer){
        console.log("computer was the winner");
}
else{
        console.log("We have a tie!")
}
}
game()

