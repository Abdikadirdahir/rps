/*# Unit 03 Mini-Project: Rock, Paper, Scissors

In this activity, you will work with a group to build a game using only JavaScript.

## Instructions

The completed application should meet the following criteria:

*  

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.

### Specifications

* Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

* The computer's selection must be random to ensure a fair game.

## 💡 Notes

Refer to the documentat */


var wins = 0;
var losses = 0;
var ties = 0;

var computerChoice = ["rock", "paper", "scissors"]

function generateComptureChoice(){
    var randomChoice = Math.floor(Math.random()*computerChoice.length)
    return computerChoice[randomChoice];
}

function playTheGame(){
  var userInput = prompt("type an option: rock, paper, or scissor")
    if(userInput === null){
        alert("goodbye")
        return; }
    

 var computerChoice = generateComptureChoice()


if (userInput === computerChoice) {
    alert("its a tie");
    ties++;
    } else if (
    (userInput === "rock" && computerChoice === "scissor") || 
    (userInput == "paper" && computerChoice == "rock")|| 
    (userInput === "scissor" && computerChoice === "paper") ){
        alert("you win");
        wins++;

    } else {
        alert("you lose");
        losses++;
      }

    
 
    var playAgain =  confirm("do you want to play again"); 
    if(playAgain){
        playTheGame();
    } else {
        console.log("thank you ")
        alert("Stats:\nWins" + wins + "\nLosses:" + losses + "\nTies:" + ties)
 
    }
    
}

playTheGame();
