console.log("main.js loaded!");

/* MODEL Data *********************************************************/

// Note: questions loaded in data.js!
var questionNumber = 0;
var score          = 0;
var selected;

/* REFRESH THE PAGE TO RESTART */

var restartGame = function() {
  window.location.reload(true);
};

/* IMAGES FOR HI RES SCREENS************************************/

$(document).ready(function(){
  if (window.devicePixelRatio > 1) {
    var lowresImages = $('img');
    images.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
   }
});

/* THIS CHECKS IF THE CLICKED ANSWER IS CORRECT ************************/

function checkAnswer(selectedAnswer) {
  var answer = null;
  if(questions[questionNumber].answer === selectedAnswer) {
    console.log("Correct");
    score += 1;
    answer = true;
    $("#score").text(score + " correct out of 12");
  } else {
    console.log("Incorrect");
    answer = false;
    score;
    $("#score").text(score + " correct out of 12");
  }
  showHideAnsImg(answer);
};

/* WINNER CATEGORY SCREEN ***********************************/

var winnerIs = function() {
    var categoryNumber;
  $("#submit").addClass("hidden");
  if (score > 9) {
    categoryNumber = 1;
  } else if (score < 9 && score >= 6) {
    categoryNumber = 2;
  } else if (score < 6 && score >= 3) {
    categoryNumber = 3;
  } else if (score < 3 && score >= 0) {
    categoryNumber = 4;
  }
  if (categoryNumber === 1){
    $("#quizContainer").addClass("hidden");
    $("#winnerCategory1").removeClass("hidden");
  } else if (categoryNumber === 2){
    $("#quizContainer").addClass("hidden");
    $("#winnerCategory2").removeClass("hidden");
  } else if (categoryNumber === 3){
    $("#quizContainer").addClass("hidden");
    $("#winnerCategory3").removeClass("hidden");
  } else if (categoryNumber === 4){
    $("#quizContainer").addClass("hidden");
    $("#winnerCategory4").removeClass("hidden");
  }
}

/* SHOW IMAGE AFTER ANSWER *********************************/

function flashElement(el) {
  el.fadeIn(1000).delay(2000).fadeOut(1000);
}

function showHideAnsImg(answer){
  var imageNumber = questionNumber + 1;
  if (answer === true) {
    flashElement($('#correct' + imageNumber));
  } else {
    flashElement($('#incorrect' + imageNumber));
  }
}

/* FUNCTION TO REMOVE SELECTED BUTTON WHEN THE NEXT QUESTION LOADS *****************/

function removeRadioButton() {
  $("input:radio:checked").removeAttr("checked");
}

/* CLICK 'SUBMIT' TO SUBMIT CHECKED ANSWER AND RUN LOTS OF FUNCTIONS! ****************/

$("#submit").on("click", function() {
  console.log("working");
  if (!selected) {
    return; // return nothing. do nothing. stop the function. ignore this.
  } else {
    questionProgress();
    pageRenderImg();
    runWinnerFunc();
  }
});

/* I BROKE APART MY HUGE CLICK FUNCTION!***************************/

var questionProgress = function() {
  checkAnswer(selected);
  questionNumber += 1;
  selected = undefined;
}

var pageRenderImg = function() {
  removeRadioButton();
  $("#quizContainer").fadeOut(1).delay(3500).fadeIn(1000);
  $(":button").fadeOut(1).delay(3500).fadeIn(1000);
}

var runWinnerFunc = function() {
if(questionNumber > 11){
    winnerIs();
  } else {
    render();
  }
}

/* CLICK ANSWER FUNCTION *****************************************/

$("input:radio").on('click', function(){
  selected = ($(this).val());
});

/* CLICK START BUTTON PAGE TRANSITION *******************************/

$("#start").on("click", function(evt) {
  $("#title-container").fadeOut(2000).addClass("hidden");
  $("#quizContainer").fadeIn(2000).removeClass("hidden");
  $("#score").fadeIn(2000).removeClass("hidden");
  $("#submit").removeClass("hidden");
  $("#start").addClass("hidden");
});

/* CLICK RESTART TO PLAY AGAIN ******************/

$("#restart").on("click", function(){
  restartGame();
});

/* VIEW ELEMENTS******************************************************/

var $questions = $(document.getElementById("questions"));

var render = function() {
  // 1. identify the information we need
  var currentQuestion = questions[questionNumber];

  // 2. identify where it goes
  var $questionBox = $("#questions");
  var $answerA = $("#a span");
  var $answerB = $("#b span");
  var $answerC = $("#c span");
  var $answerD = $("#d span");

 // 3. put it there
  $questionBox.text(currentQuestion.prompt);
  $answerA.text(currentQuestion.options[0]);
  $answerB.text(currentQuestion.options[1]);
  $answerC.text(currentQuestion.options[2]);
  $answerD.text(currentQuestion.options[3]);
};

/* STARTUP ************************************************************/

render();
