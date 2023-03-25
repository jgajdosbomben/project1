export let questions = [
    {
        id: 1,
        category: "Science",
        question: "What is a comet made of? \n a) Dust, rock, and ice \n b) Gas \n c) Rock",
        correctAnswer: "Dust, rock, and ice",
        correctAnswerLetter: "a",
        used: false
    },
    {
        id: 2,
        category: "Science",
        question: "What is an asteroid made of? \n a) Ice \n b) Dust \n c) Rock",
        correctAnswer: "Rock",
        correctAnswerLetter: "c",
        used: false
    },
    {
        id: 3,
        category: "Science",
        question: "How many earths can fit inside the sun? \n a) 3 million \n b) 1.3 million \n c) 675300",
        correctAnswer: "1.3 million",
        correctAnswerLetter: "b",
        used: false
    },
    {
        id: 4,
        category: "Science",
        question: "What is the name of the galaxy where Earth resides? \n a) The Andromeda Galaxy \n b) The Cygnus A Galaxy \n c) The Milky Way Galaxy",
        correctAnswer: "The Milky Way Galaxy",
        correctAnswerLetter: "c",
        used: false
    },
    {
        id: 5,
        category: "Science",
        question: "What type of star is the Sun? \n a) Yellow Dwarf \n b) Red Giant \n c) Brown Dwarf ",
        correctAnswer: "Yellow Dwarf",
        correctAnswerLetter: "a",
        used: false
    },  
    {
        id: 6,
        category: "Science",
        question: "What type of number is Pi? \n a) Integer \n b) Irrational \n c) Rational",
        correctAnswer: "Irrational",
        correctAnswerLetter: "b",
        used: false
    }, 
     {
        id: 7,
        category: "Sports",
        question: "In what game is “love” a score? \n a) Tennis \n b) Golf \n c) Hockey",
        correctAnswer: "Tennis",
        correctAnswerLetter: "a",
        used: false
    },
     {
        id: 8,
        category: "Sports",
        question: "How often are the Olympics held? \n a) Every 2 years \n b) Every 4 years \n c) Every 5 years",
        correctAnswer: "Every 4 years",
        correctAnswerLetter: "b",
        used: false
    },
     {
        id: 9,
        category: "Entertainment",
        question: "What is Lightning McQueen's number in the movie Cars? \n a) 8 \n b) 32 \n c) 95",
        correctAnswer: "95",
        correctAnswerLetter: "c",
        used: false
    },
     {
        id: 10,
        category: "Entertainment",
        question: "How many fingers does Mickey Mouse have? \n a) 4 \n b) 5 \n c) 6",
        correctAnswer: "4",
        correctAnswerLetter: "a",
        used: false
    }
];

//Finds a question that has not been used before, i.e. not displayed to the user. Displays the question to the user.

let findQuestion = null;

export function getTriviaQuestion() {
    let questionToDisplay = null;
    findQuestion = questions.find(question => question.used === false); //Finds a question where used===false.
    if (findQuestion === undefined) {
        questionToDisplay = "Game over. ";
    } else {
        questionToDisplay = findQuestion.question; //Assigns the question to the question that was just found above.
        findQuestion.used = true; //Change used property to true so that it will not be displayed again.
    };
    // console.log(questionToDisplay); //Display question to user in command prompt.
    // console.log(findQuestion.used); //Check that property was changed to true.
    return questionToDisplay;
};


export function checkAnswer(answer){
   let yourAnswerIs;
    if (answer === findQuestion.correctAnswerLetter){
        console.log(answer);
    yourAnswerIs = "Correct!";
   } else {
    yourAnswerIs = `Sorry, your answer (${answer}) is incorrect. The correct answer is: ${findQuestion.correctAnswerLetter}`;
   };
   return yourAnswerIs;
   console.log(yourAnswerIs);
};

export function addQuestion(question) {
    questions.push(question);
};

export function deleteQuestion(idNumber) {
    idNumber = parseInt(idNumber, 10);
    questions = questions.filter(x => x.id !== idNumber);
};


// // get random question
// const randomQuestion = questions[randomIndex].question;   
// questions[randomIndex].used = true;

// let currentQuestionId = 1;

// export function getRandomQuestion() {
// //get random index value

//   let randomIndex = Math.floor(Math.random()*questions.length);
// //   console.log(randomIndex);
  
// // check if used = true then get another random index
// while (questions[randomIndex].used === true) {
//     randomIndex = Math.floor(Math.random()*questions.length);
//     // console.log(randomIndex);
//     // console.log(questions[randomIndex].used);
// };
// // get random question
//   const randomQuestion = questions[randomIndex].question;   
//   questions[randomIndex].used = true;
// //    console.log(questions[randomIndex].used);

// // assign randomIndex to currentQuestionId global variable
// currentQuestionId = randomIndex;
//   return randomQuestion;
// };

// function checkAnswer (answer) {
// if (answer === questions[currentQuestionId]["correct answer letter"]) {
//     console.log("Correct! Onto the next question.\n")
// } else {
//     console.log(`Sorry, that answer is incorrect. The correct answer is: ${questions[currentQuestionId][correctAnswer]}\n`);
// };
// };

// //execute for loop to run all questions
// export function loopThroughQuestions () {
//     for (let i=0; i < questions.length ; i++) {
//     console.log(getRandomQuestion(currentQuestionId));
// };


// // questions[]
// loopThroughQuestions();


