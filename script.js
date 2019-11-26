$(document).ready(function() {

    var startButton = $("#start");
    var scoreContainer = $("#score");
    var titleContainer = $("#title");
    var currentQindex = 0;
    var currentCindex = 0;
    var score = 0;
    var time = 10 * questions.length;
    var intervalID; //indentifyer for interval that's running
    
    function getQuestion() { 
      //stops quiz
      if (currentQindex === questions.length) { 
          endQuiz(); 
          return;
      }
      
      for (var i = 0; i < questions[currentQindex].choices.length; i++) { 
        titleContainer.text(questions[currentQindex].title);
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
        else {
          time = time-5; 
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
    intervalID = setInterval(quizTimer, 1000)
  })

  function endQuiz() {
    clearInterval(intervalID);
    titleContainer.remove(); 
    
  }
  
  
  function quizTimer() {
    $("#timer").text("Timer: " + time);
    if (time > 0) {
        time--;
    }
    else {
        clearInterval(intervalID);
        $("#timer").empty(); 
        choicesContainer.remove(); 
        titleContainer.remove(); 
    }
  }
 
});
  

  