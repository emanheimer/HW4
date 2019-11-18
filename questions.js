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
          getQuestion();
        }
        scoreContainer.append(score);
        currentQindex++;
        getQuestion();

      })
  }
}

  
startButton.on("click", function() {
  getQuestion(0);
  startButton.remove(); 
})


//create separate functions for correct and incorrect, and have the Q index go up in both











   
});

