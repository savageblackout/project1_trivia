console.log("main.js loaded!");
 // $(document).ready(function(){

/* MODEL Data *********************************************************/

var questions = [
  {
    prompt:  "'Thank you for publishing this list. Such factual ammunition, conveniently at our fingertips, is just the thing we need.'  This is a(n):",
    answer:  "a",
    options: [
      "Comment left on an article about female only programs",
      "Text from a friend who provided you with a list of local libraries",
      "Olivia Pope's response to obtaining important information about an adversary",
      "Letter to the editor of a local newspaper regarding a recent article on tips to deal with a bed bug infestation"
    ]
  },
  {
    prompt: "'Take the red pill' is a phrase often used by this group of people:",
    answer: "d",
    options: [
    "Huge fans of The Matrix",
    "Licensed medical professionals",
    "Mens Rights Advocates (MRAs)",
    "All of the above"
    ]
  },
  {
    prompt: "The 'manosphere' refers to:",
    answer: "d",
    options: [
    "A magical land where men have equal rights as women",
    "The secret space program designed by feminists that will launch into space all men left after the apocalypse",
    "A layer of ozone in the Earth's atmosphere consisting of Old Spice products",
    "Online blogs, message boards and other sites frequented by MRAs"
    ]
  },
];

var questionNumber = 0;

/* CLICK FUNCTION FOR CHOICES *******************/
var selected = "";

$( "#a" ).on('click', function(evt) {
    selected = $(this).attr("id");
});

$( "#b" ).on('click', function(evt) {
    selected = $(this).attr("id");
});

$( "#c" ).on('click', function(evt) {
    selected = $(this).attr("id");
});

$( "#d" ).on('click', function(evt) {
    selected = $(this).attr("id");
});

/* MODEL Behavior *****************************************************/
var correctAnswer = questions[questionNumber].answer;

var checkAnswer = function() {
  if(correctAnswer === selected) {
    console.log("Correct");
  } else {
    console.log("Incorrect");
  }
};

/* CLICK 'SUBMIT' TO SUBMIT CHECKED ANSWER ****************/


$("#submit").on("click", function(){
  checkAnswer();
  $("#submit").off("click");
  questionNumber += 1;
  render();
  removeRadioButton();
});


// function to remove selected radio button

function removeRadioButton() {
  $("input:radio:checked").removeAttr("checked");
}

/* CLICK START BUTTON PAGE TRANSITION *******************************/

$("#start").on("click", function(evt) {
    $("#title-container").addClass("hidden");
    $("#quizContainer").removeClass("hidden");
    $("#restart").addClass("hidden");
    $("#start").addClass("hidden");
  });


/* CLICK RESTART TO PLAY AGAIN ******************/

var restartGame = function(){
  $("#restart").removeClass("hidden");
    //take me back to the quizContainer
}

/* VIEW ELEMENTS ******************************************************/

var $questions = $(document.getElementById('questions'));

var render = function() {
  // 1. identify the information we need
  var currentQuestion = questions[questionNumber];

  // 2. identify where it goes
  var $questionBox = $('#questions');
  var $answerA = $('#a span');
  var $answerB = $('#b span');
  var $answerC = $('#c span');
  var $answerD = $('#d span');

 // 3. put it there
  $questionBox.text(currentQuestion.prompt);
  $answerA.text(currentQuestion.options[0]);
  $answerB.text(currentQuestion.options[1]);
  $answerC.text(currentQuestion.options[2]);
  $answerD.text(currentQuestion.options[3]);
};

/* STARTUP ************************************************************/

render();
// });

/* DEAD CODE **********************************************************/

// //Winner categories and descriptions
var assignCats = function() {
    if (correctAnswer <= 12 && correctAnswer >= 9) {
        console.log("winner category 1");
    } else if (correctAnswer < 9 && correctAnswer >= 6) {
        console.log("winner category 2");
    } else if (correctAnswer < 6 && correctAnswer >= 3) {
        console.log("winner category 3");
    } else if (correctAnswer < 3 && correctAnswer >= 0) {
        console.log("winner category 4");
    }
};
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




