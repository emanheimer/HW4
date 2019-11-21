var questions =  [ {
      title: "Which of these musical periods is the earliest?",
      choices: ["Baroque", "Romantic", "20th Century", "Classical"],
      answer: "Baroque"
    },
    {
      title: "Who is considered the 'Father' of the modern symphony?",
      choices: ["Thcaikovsky", "Beethoven", "Haydn", "Brahms"],
      answer: "Haydn"
    },
    {
      title: "Which of these notes is a tritone interval from C?",
      choices: ["E", "F#", "G", "Bb"],
      answer: "F#"
    },
    {
      title: "A standard piano keyboard contains how many keys?",
      choices: ["88", "72", "104", "60"],
      answer: "88"
    },
    {
      title: "Which of these instruments has equal temperament tuning?",
      choices: ["cello", "harp", "piano", "clarinet"],
      answer: "piano"
    },
  ];

var highScores = [
  {
    name: "hi",
    score: 10,
  },
  {
    name: "bye",
    score: 20,
  },
]

function showScore() {
  for (var i = 0; i < highScores.length; i++) {
      $("#hscoreContainer").append(highScores[i].name);
  }

}

showScore(); 




// [{}, {}]