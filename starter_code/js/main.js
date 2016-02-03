console.log("main.js loaded!");
 // $(document).ready(function(){

/* MODEL Data *********************************************************/

var questions = [
  {
    prompt:  "'Thank you for publishing this list. Such factual ammunition, conveniently at our fingertips, is just the thing we need.'  This is:",
    answer:  "a",
    options: [
      "A comment left on an article about female only programs",
      "A text from a friend who provided you with a list of local libraries",
      "Olivia Pope's response to obtaining important information about an adversary",
      "A letter to the editor of a local newspaper regarding a recent article on tips to deal with a bed bug infestation"
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
  {
    prompt: "'My 'game' is lacking bro. What is a guy to do?' An appropriate answer within the tenets of misandry would be:",
    answer: "d",
    options: [
    "'Stop messing with Western Women bro. They are indoctrinated with evil feminist propaganda",
    "'Find a HB (Hot Babe) who is DTF (Down To Eff)'",
    "'Get a hobby, bro!'",
    "A & B"
    ]
  },
  {
    prompt: "'Incel' is a term used to describe:",
    answer: "b",
    options: [
    "The prototype for the Intel Pentium Processor",
    "An identity adopted by dateless men; short for involuntarily celibate",
    "The prison men are trapped in in our society",
    "A shade of purple used primarily in the Color Harmony formula"
    ]
  },
  {
    prompt: "'Hypergamy' sounds like a way to describe the way the meat of a very excited deer tastes, but really it means:",
    answer: "c",
    options: [
    "A t-shirt popular in the ‘90s that changes colors based on temperature",
    "A delicious gummy candy",
    "The perceived tendency of females to date males of a higher socioeconomic status",
    "The theory stating that gender inequality is based on flawed logic"
    ]
  },
  {
    prompt: "'Brody, you’re a good guy, but I think we should just be friends'…whoa bro, you just got:",
    answer: "b",
    options: [
    "A new friend! Yay!",
    "Friendzoned",
    "Some new life experiences to write about in that novel you've been workin on",
    "None of the above"
    ]
  },
  {
    prompt: "‘All women are the same’ is a belief evidenced in:",
    answer: "b",
    options: [
    "Denying women ‘snowflake’ status",
    "Noncel behavior",
    "GFTOW, or ‘go find ten other women’, as a way to get over rejection by a woman",
    "All of the above"
    ]
  },
  {
    prompt: "‘Oh that Johnny is a bad boy with that leather jacket and that Harley Davidson. He is so mean to me but I just cant get enough of him!’. Johnny is an example of:",
    answer: "d",
    options: [
    "An Androphile",
    "A Beta male",
    "A foreign woman",
    "An Alpha male"
    ]
  },
  {
    prompt: "I am a man who wants to live in a separate society far from all females because this feminazism and female supremacy is bumming me out. I am:",
    answer: "b",
    options: [
    "A character from a popular graphic novel series whose name is Yorick",
    "A 'Man Going His Own Way'",
    "Commonly referred to as 'the gun in the room'",
    "A Noncel"
    ]
  },
  {
    prompt: "‘I'm a nice guy — how come girls don't want to sleep with me?’ This common lament is not only the most tired trope in movies starring a shlubby dude who ends up getting the girl at the end of 1.5 to 2 hours, but it is also:",
    answer: "b",
    options: [
    "The opposite of a ‘Bad Boy’",
    "An example of ‘Dread game’",
    "Omega rage",
    "The oldest trick in the book of ‘Pick-Up Artists’"
    ]
  },
  {
    prompt: "I’m a bro who has fallen in love *gasp* with a woman. I’m the worst because:",
    answer: "b",
    options: [
    "Monogamy/romance/marriage is the enemy of the ‘woke’ man",
    "I put a woman on a pedestal, which is exactly where she doesn’t belong",
    "I have cemented my identity as a ‘thirsty’ dude",
    "All of the above"
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
  questionNumber += 1;
  render();
  removeRadioButton();
});


/* FUNCTION TO REMOVE SELECTED BUTTON*****************/

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




