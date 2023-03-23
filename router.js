import express from "express";
import { getTriviaQuestion , checkAnswer } from "./questions.js";
// import{ getRandomQuestion, loopThroughQuestions} from "./questions.js";
export const router = express.Router();

// router.get('/', (request, response) => {
//     const questions = getRandomQuestion();
//     response.send(questions);
// });

router.get('/', (request, response) => {
    const questions = getTriviaQuestion();
    response.send(questions);
});

router.post('/', (request, response) => {
    const answer = request.body.answer;
    response.send(checkAnswer(answer));
});
    
    //questionsRouter.post('/answer', (request, response) => {
        // user answer  and testing against the actual answer
        // res.send("Correct or Incorrect based on the above");
    // })