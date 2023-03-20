import PromptSync from "prompt-sync";

const prompt = PromptSync();

const questions = [
    {
        "id": 1,
        "category": "Science",
        "question": "What is a comet made of? \n a) Dust, rock, and ice \n b) Gas \n c) Rock",
        "correct answer": "Dust, rock, and ice",
        "correct answer letter": "a",
        "used": false
    },
    {
        "id": 2,
        "category": "Science",
        "question": "What is an asteroid made of? \n a) Ice \n b) Dust \n c) Rock",
        "correct answer": "Rock",
        "correct answer letter": "c",
        "used": false
    },
    {
        "id": 3,
        "category": "Science",
        "question": "How many earths can fit inside the sun? \n a) 3 million \n b) 1.3 million \n c) 675300",
        "correct answer": "1.3 million",
        "correct answer letter": "b",
        "used": false
    },
    {
        "id": 4,
        "category": "Science",
        "question": "What is the name of the galaxy where Earth resides? \n a) The Andromeda Galaxy \n b) The Cygnus A Galaxy \n c) The Milky Way Galaxy",
        "correct answer": "The Milky Way Galaxy",
        "correct answer letter": "c",
        "used": false
    },
    {
        "id": 5,
        "category": "Science",
        "question": "What type of star is the Sun? \n a) Yellow Dwarf \n b) Red Giant \n c) Brown Dwarf ",
        "correct answer": "Yellow Dwarf",
        "correct answer letter": "a",
        "used": false
    },  
    {
        "id": 6,
        "category": "Science",
        "question": "What type of number is Pi? \n a) Integer \n b) Irrational \n c) Rational",
        "correct answer": "Irrational",
        "correct answer letter": "b",
        "used": false
    }
];

let currentQuestionId = 1;

export function getRandomQuestion(currentQuestionID) {
//get random index value
  let randomIndex = Math.floor(Math.random()*questions.length);
//   console.log(randomIndex);
  
// check if used = true;
while (questions[randomIndex].used === true) {
    randomIndex = Math.floor(Math.random()*questions.length);
    // console.log(randomIndex);
    // console.log(questions[randomIndex].used);
};
// get random question
  const randomQuestion = questions[randomIndex].question;   
  questions[randomIndex].used = true;
//    console.log(questions[randomIndex].used);
// assign randomIndex to currentQuestionId global variable
currentQuestionId = randomIndex;
  return randomQuestion;
};

function checkAnswer (answer, currentQuestionID) {
if (answer === questions[currentQuestionID]["correct answer letter"]) {
    console.log("Correct! Onto the next question.\n")
} else {
    console.log(`Sorry, that answer is incorrect. The correct answer is: ${questions[currentQuestionId]["correct answer"]}\n`);
};
};

//execute for loop to run all questions
export function loopThroughQuestions () {
    for (let i=0; i < questions.length ; i++) {
    console.log(getRandomQuestion(currentQuestionId));

    // User input to answer question
    let answer = prompt("Enter your answer: ");
    console.log(`Answer: ${answer}`);
    checkAnswer(answer, currentQuestionId);
    };
};


// questions[]
loopThroughQuestions();
