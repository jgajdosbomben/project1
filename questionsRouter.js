import express from "express";
import { getTriviaQuestion , checkAnswer } from "./questions.js";
// import{ getRandomQuestion, loopThroughQuestions} from "./questions.js";
export const questionsRouter = express.Router();

// questionsRouter.get('/', (request, response) => {
//     const questions = getRandomQuestion();
//     response.send(questions);
// });

questionsRouter.get('/', (request, response) => {
    const questions = getTriviaQuestion();
    response.send(questions);
});


questionsRouter.post('/', (request, response) => {
    const answer = request.body;
    
    response.send(checkAnswer(answer));
});
    
    //questionsRouter.post('/answer', (request, response) => {
        // user answer  and testing against the actual answer
        // res.send("Correct or Incorrect based on the above");
    // })