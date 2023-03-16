import express from "express";
import { allQuestions } from "./trivia.js";

export const testRouter = express.Router();

testRouter.get('/', (request, response) => {
    const questions = allQuestions();
    response.send(questions);
});
