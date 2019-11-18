questions =  [ {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Blah?",
      choices: ["blah1", "blah", "blah", "blah"],
      answer: "blah1"
    }
  ];

$(document).ready(function() {

  var startButton = $("#start");
  var scoreContainer = $("#score");
  var currentQindex = 0;
  var currentCindex = 0;
  var score = 0;
  var time = 1 * questions.length;
  var interval;
  
  function getQuestion() { 
    for (var i = 0; i < questions[currentQindex].choices.length; i++) { 
      $("#title").text(questions[currentQindex].title);
      var choicesContainer=$("#choicesContainer"); 
      // choicesContainer.append("<button>" + questions[j].choices[i] + "</button>"); (Another way to do it)
      var choiceButton = $("<button>");
      choiceButton.text(questions[currentQindex].choices[i]);//this needs to show text
      choicesContainer.append(choiceButton);
      choiceButton.on("click", function(event) {
      var choiceText = (event.target.innerHTML);
      if (choiceText === questions[currentQindex].answer)
      {
        score++; 
      }
      currentQindex++;
      $("#choicesContainer").empty();
      $("#score").empty();
      scoreContainer.append(score);
      getQuestion();
      })
  }
}

startButton.on("click", function() {
  getQuestion(0);
  startButton.remove(); 
  interval = setInterval(quizTimer, 1000)
})

function quizTimer() {
  $("#timer").text("Timer: " + time);
  if (time > 0) {
      time--;
  }
  else {
      clearInterval(time);
      $("#timer").append(" *Time's Up!*");
  }
}










   
});

