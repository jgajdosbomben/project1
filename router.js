import express from "express";
import { questions, getTriviaQuestion , checkAnswer, addQuestion, editQuestion, deleteQuestion} from "./questions.js";

export const router = express.Router();

// Get trivia questions endpoint
router.get('/', (request, response) => {
    const questions = getTriviaQuestion();
    response.send(questions);
});

// Check an answer endpoint
router.post('/', (request, response) => {
    const answer = request.body.answer;
    response.send(checkAnswer(answer));
});
  
// Add a new question endpoint
router.post('/new', (request, response) => {
    const newQuestion = request.body;
    addQuestion(newQuestion);                    
    response.send(questions);
});

// Edit question endpoint
router.patch('/:id', (request, response) => {
    const editId = request.params.id;
    const editData = request.body;
    editQuestion(editId, editData);
    response.send(questions);
});

// Delete a question endpoint
router.delete('/:id', (request, response) => {
    const questionToDelete = request.params.id;
    deleteQuestion(questionToDelete);
    response.send(questions);
});