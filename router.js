import express from "express";
import { questions, getTriviaQuestion , checkAnswer, addQuestion, deleteQuestion} from "./questions.js";

export const router = express.Router();

router.get('/', (request, response) => {
    const questions = getTriviaQuestion();
    response.send(questions);
});

router.post('/', (request, response) => {
    const answer = request.body.answer;
    response.send(checkAnswer(answer));
});
    
router.post('/new', (request, response) => {
    const newQuestion = request.body;
    addQuestion(newQuestion);                    
    response.send(questions);
});

router.delete('/:id', (request, response) => {
    const questionToDelete = request.params.id;
    deleteQuestion(questionToDelete);
    response.send(questions);
});