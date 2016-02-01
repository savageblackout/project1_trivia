console.log("main.js loaded!");

var $questions = $(document.selectElementById('questions'));

push("yes")$questions;

var questions = [
{question: '"Thank you for publishing this list. Such factual ammunition,
conveniently at our fingertips, is just the thing we need.”  This is a(n):'},
{choices: [“a”, “b”, “c”, “d”, "a"]}
];

var answers = (questions[1][4]);
var userAnswers =
  ["A. comment left on an article about female only programs",

  "B. Text from a friend who provided you with a list of local
  libraries",

  "C. Olivia Pope's response to obtaining important information about
  an adversary",

  "D. Letter to the editor of a local newspaper regarding a recent
  article on tips to deal with a bed bug infestation"]

  var playerChoice {
    document.selectElementById('a', 'b', 'c', 'd')
            .addEventListener('on-click', checkAnswer())
  }

  var checkAnswer = function{

  }


// var questions = [
// {question: '“Thank you for publishing this list. Such factual ammunition, conveniently at our fingertips, is just the thing we need.”  This is a(n):',
//  choices: [“a”, “b”, “c”, “d”, “d”]

// var answers = [question[5]];

//   [$answerA: "A. comment left on an article about female only programs",

//   $answerB: "vaB. Text from a friend who provided you with a list of local libraries",

//   $answerC: "C. Olivia Pope's response to obtaining important information about an adversary",

//   $answerD: "D. Letter to the editor of a local newspaper regarding a recent article tips to deal with a bed bug infestation",

//   $answer: "A. comment left on an article about female only programs"],
//   }, {$prompt: '"Take the red pill" is a phrase often used by this group of people:'
//   $options:
//   [$answerA: 'A. Huge fans of The Matrix',
//   $answerB: 'B. Licensed medical professionals',
//   $answerC: 'C. Mens Rights Advocates (MRAs)',
//   $answerD: 'D. All of the above',
//   $answer: 'D. All of the above']}
//   }]

// //MODEL: Data model******

// var questionCount = 0
// var openQuestions = [0, 1, 2, 3, 4, 5,
//                     6, 7, 8, 9];
// var closedQuestions = [];
// var totalQuestions = $('.questions').size();
// var currentQuestion = 0;
// $('.option').change(function(){
//     var answer = ($(this).attr('value'))
//     var question = ($(this).attr('name'))
//     answers[question] = answer

// var initGame = function(){
//   $options.addEventListener("click", returnAnswer()){
//     if ($options == $answer){
//       correctAns();
//       questionCount ++;
//       $questions.hide();
//       $($questions.get(currentQuestion)).fadeIn();

//       console.log("yay!");
//     }else{
//        incorrectAns();
//        returnQuestion();
//        console.log("boo!");
//     }
//   }

//   }



// };

// returnQuestion = function() {

// };

// var correctAns = function(){

// }
// var incorrectAns = function(){

// }
// //Winner categories and descriptions

// var $winningCategory1 = $('#winnerCategory1');
// var $winningCategory2 = $('#winnerCategory1');
// var $winningCategory3 = $('#winnerCategory1');
// var $winningCategory4 = $('#winnerCategory1');

// $('#winningCategory1') = "Official Mens Rights Activist";
// $('#winningCategory2') = "Frequent 'Red Pill' Reddit Contributor";
// $('#winningCategory3') = "Female Chauvanist";
// $('#winningCategory4') = "FemiNazi";

// var $winnerExplain1 = $('#winnerExplain1');
// var $winnerExplain2 = $('#winnerExplain2');
// var $winnerExplain3 = $('#winnerExplain3');
// var $winnerExplain4 = $('#winnerExplain4');

// $('#winnerExplain1') = "wow! time to look up the local MRA chapter";
// $('#winnerExplain2') = "well done. you know your stuff, but you could stand to do some studying";
// $('#winnerExplain3') = "whoa! pump the brakes buddy. get to know the male struggle";
// $('#winnerExplain4') = "GTFOH with your 'feminist' agenda! No man is safe with you around";

// //Start the game

// var pickRandomQuestion = function (){
//   var randomIndex = Math.floor(Math.random() * openQuestions.length);
//   var splicedValue = openQuestions.splice(randomIndex, 1);
//   return splicedValue[0];
// };

// var restartGame = function(){
//   initGame(){

//   }
// }

// //winning conditions…


// // if (correctAns > 15 && correctAns < 20){
// //   winningCategory1();
// //   return $('#winningCategory1'), $('#winnerExplain1')
// //   console.log("WINNER 1!");
// //   } else if (correctAns < 15 && correctAns > 10) {
// //   winningCategory2();
// //   return
// //   console.log("WINNER 2!");
// // } else if (correctAns < 10 && correctAns > 5) {
// //   winningCategory3;
// //   return
// //   console.log("WINNER 3!");
// // } else if (correctAns < 5 && correctAns > 0){
// //   winningCategory4();
// //   return
// //   console.log("WINNER 4!")
// // }

// //Console helper: Print the state!

// var printState = function() {
//   if (winningCategory1) {
//     console.log("GREAT JOB!");
//   } else if(winningCategory2) {
//     console.log("GOOD JOB!");
//   } else if (winningCategory3) {
//     console.log("OK JOB!");
//   } else (winningCategory4) {
//     console.log("MEH JOB!");
//   }
// }

// });

// // /*MODEL: Game Behavior**********


// // /*Helper Methods*******************

// // //Screen render


// // /* VIEW: Render******************



// // /*Interaction: User-initiated handlers*********


// // /*Interaction: Other gameplay functions******



// // /* Start up **********

// // //Global variables
// // //DOM functions

// // //Start the game!
