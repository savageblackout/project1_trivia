console.log("main.js loaded!");


//MODEL: Data model******

//the data that underlies each "move" of the game…

//1 player; 20 questions total.
//2 game options; 10 questions per each game option;
//4 winner categories based on answers

var count = 0
var gameType1
var gameType2

//State of the Game:
//How questions are chosen, where they go
var openQuestions = [0, 1, 2, 3, 4, 5,
                    6, 7, 8, 9, 10, 11,
                    12, 13, 14, 15, 16,
                    17, 18, 19, 20];

var closedQuestions = [];

var player = 0


//Winner categories and descriptions

var $winningCategory1 = $('#winnerCategory1');
var $winningCategory2 = $('#winnerCategory1');
var $winningCategory3 = $('#winnerCategory1');
var $winningCategory4 = $('#winnerCategory1');

$('#winningCategory1') = "Official Mens Rights Activist";
$('#winningCategory2') = "Frequent 'Red Pill' Reddit Contributor";
$('#winningCategory3') = "Female Chauvanist";
$('#winningCategory4') = "FemiNazi";

var $winnerExplain1 = $('#winnerExplain1');
var $winnerExplain2 = $('#winnerExplain2');
var $winnerExplain3 = $('#winnerExplain3');
var $winnerExplain4 = $('#winnerExplain4');

$('#winnerExplain1') = "wow! time to look up the local MRA chapter";
$('#winnerExplain2') = "well done. you know your stuff, but you could stand to do some studying";
$('#winnerExplain3') = "whoa! pump the brakes buddy. get to know the male struggle";
$('#winnerExplain4') = "GTFOH with your 'feminist' propaganda! No man is safe with you around";

//Start the game

var initGame = function(){

}

var restartGame = function(){
  initGame{

  }
}


//winning conditions…


if (correctAns > 15 && correctAns < 20){
  winningCategory1();
  return
  console.log("WINNER 1!");
  } else if (correctAns < 15 && correctAns > 10) {
  winningCategory2();
  return
  console.log("WINNER 2!");
} else if (correctAns < 10 && correctAns > 5) {
  winningCategory3;
  return
  console.log("WINNER 3!");
} else if (correctAns < 5 && correctAns > 0){
  winningCategory4();
  return
  console.log("WINNER 4!")
}



// //game states or modes…
//states: title screen, questions screen: 1- multiple choice 2-t/f,
//score screen (after each "click" event on a question screen),
//end screen


// //the process of rendering:


// //when will you render?

//title screen, question screen at question pop-up and
//after click-event- score will pop-up
//at end screen - final score and winner category provided
//back to title screen
//

// //when you render, what do you need to know?

//if player has chosen to play the game
//which box the player clicked
//the value of this button
//the total player score
//if the player chooses to retart the game


// //how will you render? What structures might ease that?

//display will need to be set to 'hidden' for several divs
//jQuery will help with the behaviors (would like to make the
  //div pop-ups animated)



// // Global Variables



// //State of the board



// //State of the game


// //Console helper: Print the state!

var printState = function() {
  if (gameLost) {
    console.log("YOU SUCK!")
  }
}
// /*MODEL: Game Behavior**********

var questions = [
{"prompt": '“Thank you for publishing this list. Such factual ammunition, conveniently at our fingertips, is just the thing we need.”
This is a(n):',
"options": "  A. comment left on an article about female only programs

  B. Text from a friend who provided you with a list of local libraries

  C. Olivia Pope's response to obtaining important information about an adversary

  D. Letter to the editor of a local newspaper regarding a recent article tips to deal with a bed bug infestation",
  "answer": "A. comment left on an article about female only programs"
}];

var $prompt = $('#prompt'),
var $options = $('#options'),
var $answer = $('.answer'),

var questionStart = function(){
  document.addEventListener("click", function(){

  })
};


var pickRandomQuestion = function (){
  var randomIndex = Math.floor(Math.random() * openQuestions.length);
  var splicedValue = openQuestions.splice(randomIndex, 1);
  return splicedValue[0];
};



// /*Helper Methods*******************

// //Screen render


// /* VIEW: Render******************



// /*Interaction: User-initiated handlers*********


// /*Interaction: Other gameplay functions******



// /* Start up **********

// //Global variables

// //DOM functions

// //Start the game!
