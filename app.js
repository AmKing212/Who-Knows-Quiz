const questions = {
  music: [
    {
      question: "Which group sings the song, 'Everybody... Rock Your Body'?",
      answers: ["NSync", "Hanson", "Backstreet Boys", "98 Degrees"],
      correct: "Backstreet Boys",
      image: "./images/everybody.jpeg",
      alt: "5 guys in a picture, 4 guys have brown hair, the other has blonde hair",
    },
    {
      question: "Which singing group thought that girl was Poison?",
      answers: ["Boyz II Men", "Jagged Edge", "Bell Biv Devoe", "B2K"],
      correct: "Bell Biv Devoe",
      image: "./images/poison.jpeg",
      alt: "3 guys posing outside in front of water",
    },
    {
      question: "Who sings 'Always Be My Baby'?",
      answers: [
        "Britney Spears",
        "Christina Aguilera",
        "Katy Perry",
        "Mariah Carey",
      ],
      correct: "Mariah Carey",
      image: "./images/always.jpeg",
      alt: "woman holding up her hands with a jean shirt on and stomach showing in front of a bonfire",
    },
    {
      question: "Which 90's artist was searching for a Real Love?",
      answers: ["Whitney Houston", "Mary J Blige", "TLC", "Saturn"],
      correct: "Mary J Blige",
      image: "./images/reallove.jpeg",
      alt: " woman with long hair and jewelry on",
    },
    {
      question: "Who wanted to be woken up when September ended?",
      answers: ["Blink 182", "Paramore", "Green Day", "Plain White Tees"],
      correct: "Green Day",
      image: "./images/september.jpeg",
      alt: " 3 guys standing next to each other",
    },
  ],

  shows: [
    {
      question: "What show had a true playa from the Himalayas?",
      answers: ["Step By Step", "Martin", "Saved By The Bell", "7th Heaven"],
      correct: "Martin",
      image: "./images/himalayas.jpeg",
      alt: "guy looking towards the himalayas with a mink and yellow shirt on",
    },
    {
      question: "Which show did Stephanie Tanner play on?",
      answers: ["Full House", "Family Matters", "Step By Step", "7th Heaven"],
      correct: "Full House",
      image: "./images/tanner.jpeg",
      alt: " 3 guys, 1 woman and 3 little girls/daughters ",
    },

    {
      question: "What sitcom had the theme song 'I’ll Be There for You'?",
      answers: ["Friends", "Seinfeld", "Frasier", "Cheers"],
      correct: "Friends",
      image: "./images/BeThereForYou.jpeg",
      alt: " people sititng on a couch in an apartment",
    },
    {
      question: "What show featured a couple named Corey & Topanga?",
      answers: [
        "Boy Meets World",
        "Full House",
        "Living Single",
        "Family Matters",
      ],
      correct: "Boy Meets World",
      image: "./images/CoreyNTopanga.jpeg",
      alt: " 4 friends hugging",
    },
    {
      question:
        "Which annoying neighbor played on the hit show Family Matters?",
      answers: ["Roger", "Steve Urkel", "Ross", "Sinclaire"],
      correct: "Steve Urkel",
      image: "./images/familyMatters.jpeg",
      alt: " 6 people hugging in a living room",
    },
    {
      question: "Which  teen show had a comedy improv?",
      answers: [
        "Rugrats",
        "Sister, Sister",
        "All That",
        "Clarissa Explains It All",
      ],
      correct: "All That",
      image: "./images/ComedyImprov.jpeg",
      alt: " 7 people on a stage",
    },
  ],
};

// Variables
let playerOneName = "";
let playerTwoName = "";
let selectedCategory = "";
let currentQuestionIndex = 0;
let currentPlayer = 1;
let scoreOne = 0;
let scoreTwo = 0;
let totalQuestions = 0;

// const body = document.body;
// const image = new Image ()

// Functions

function startQuiz() {
  playerOneName = document.getElementById("playerOneName").value;
  playerTwoName = document.getElementById("playerTwoName").value;
  selectedCategory = document.getElementById("category").value;

  if (playerOneName === "" || playerTwoName === "") {
    return;
  }

  totalQuestions = questions[selectedCategory].length;
  document.getElementById("player-info").style.display = "none";
  document.getElementById("quiz-container").style.display = "flex";
  document.getElementById("quiz-container").style.flexDirection = "column";
  document.getElementById("result").style.display = "none";
  //   body.appendChild(img)
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[selectedCategory][currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  console.log(currentQuestion);

  const answersDiv = document.getElementById("answers");
  const questionImage = document.getElementById("images");
  answersDiv.innerHTML = "";
  //   console.log(questionImage)
  questionImage.src = currentQuestion.image;
  questionImage.alt = currentQuestion.alt;

  //   body.appendChild(img);

  currentQuestion.answers.forEach((answer) => {
    const answerElement = document.createElement("button");
    answerElement.textContent = answer;
    console.log(answerElement);
    console.log(answer);
    answerElement.className = "answer";
    answerElement.onclick = function () {
      checkAnswer(answer);
    };
    answersDiv.appendChild(answerElement);
  });

  document.getElementById("current-player").textContent = `Current Player: ${
    currentPlayer === 1 ? playerOneName : playerTwoName
  }`;
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[selectedCategory][currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    if (currentPlayer === 1) {
      scoreOne++;
    } else {
      scoreTwo++;
    }
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  currentPlayer = currentPlayer === 1 ? 2 : 1; // Alternate player

  if (currentQuestionIndex < totalQuestions) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result").style.display = "block";

  let resultMessage = `<h2>Game Over!</h2>`;
  resultMessage += `<p>${playerOneName}'s Score: ${scoreOne}</p>`;
  resultMessage += `<p>${playerTwoName}'s Score: ${scoreTwo}</p>`;

  if (scoreOne > scoreTwo) {
    resultMessage += `<h3>${playerOneName} Wins, You Know The 90's and 2000's!</h3>`;
  } else if (scoreTwo > scoreOne) {
    resultMessage += `<h3>${playerTwoName} Wins, You Know The 90's and 2000's!</h3>`;
  } else if (scoreOne === scoreTwo) {
    resultMessage += `<h3>It's a Tie, ${playerOneName} and ${playerTwoName} Both know the 90's and 2000's!!</h3>`;
  } else if (score === 0) {
    resultMessage += `<h3> Aww man, you dont know the 90's or the 2000's </h3>`;
  }

  document.getElementById("result").innerHTML = resultMessage;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  scoreOne = 0;
  scoreTwo = 0;
  currentPlayer = 1;
  document.getElementById("player-info").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz-container").style.display = "none";
}
