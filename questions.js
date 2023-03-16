const questions = [
    {
        "id": 1,
        "category": "Science",
        "question": "What is a comet made of?",
        "correct answer": "Dust, rock, and ice",
        "incorrect answers": [ "Gas", "Rock"],
        "used": false
    },
    {
        "id": 2,
        "category": "Science",
        "question": "What is an asteroid made of?",
        "correct answer": "Rock",
        "incorrect answers": [ "Ice", "Dust"],
        "used": false
    },
    {
        "id": 3,
        "category": "Science",
        "question": "How many earths can fit inside the sun?",
        "correct answer": "1.3 million",
        "incorrect answers": [ "675300", "3 million"],
        "used": false
    },
    {
        "id": 4,
        "category": "Science",
        "question": "What is the name of the galaxy where Earth resides?",
        "correct answer": "The Milky Way Galaxy",
        "incorrect answers": [ "The Andromeda Galaxy", "The Cygnus A Galaxy"],
        "used": false
    },
    {
        "id": 5,
        "category": "Science",
        "question": "What type of star is the Sun?",
        "correct answer": "Yellow Dwarf",
        "incorrect answers": [ "675300", "3 million"],
        "used": false
    },  
    {
        "id": 6,
        "category": "Science",
        "question": "What type of number is Pi?",
        "correct answer": "Irrational",
        "incorrect answers": [ "Rational", "Integer"],
        "used": false
    }
];

export function allQuestions() {
    return questions;
};