import express from "express";
import { getRandomQuestion, loopThroughQuestions} from "./questions.js";

export const questionsRouter = express.Router();

questionsRouter.get('/', (request, response) => {
    response.send("hello");
    // const questions = loopThroughQuestions();
    // response.send(questions);
});
