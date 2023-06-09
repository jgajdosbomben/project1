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

//Finds a question that has not been displayed to the user and then displays the question to the user.

let findQuestion = null;
let score = 0;

export function getTriviaQuestion() {
    let questionToDisplay = null;
    findQuestion = questions.find(question => question.used === false); //Finds a question where used===false.
    if (findQuestion === undefined) {
        questionToDisplay = `Game over. Your final score is ${score} out of ${questions.length}.`;
    } else {
        questionToDisplay = findQuestion.question; //Assigns the question to the question that was just found above.
        findQuestion.used = true; //Change used property to true so that it will not be displayed again.
    };
      return questionToDisplay;
};

// Checks if the user's answer is correct
export function checkAnswer(answer){
   let yourAnswerIs;
    if (answer === findQuestion.correctAnswerLetter){
        score += 1;
        yourAnswerIs = `Correct! \nYour current score is ${score}.`;
   } else {
    yourAnswerIs = `Sorry, your answer (${answer}) is incorrect. \nThe correct answer is: ${findQuestion.correctAnswerLetter}) ${findQuestion.correctAnswer}. \nYour current score is ${score}.`;
   };
   return yourAnswerIs;
   console.log(yourAnswerIs);
};

// Adds a question
export function addQuestion(question) {
    questions.push(question);
};

// Edits a question
export function editQuestion(idNumber, newData) {
    idNumber = parseInt(idNumber, 10);
    const idToEdit = questions.find(x => x.id === idNumber);
    Object.assign(idToEdit, newData);
};

// Deletes a question
export function deleteQuestion(idNumber) {
    idNumber = parseInt(idNumber, 10);
    questions = questions.filter(x => x.id !== idNumber);
};