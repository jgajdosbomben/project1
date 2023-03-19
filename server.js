import express from "express";
import { questionsRouter } from "./questionsRouter.js";

const app = express();

const PORT = 4000;

app.use(express.json());

app.use('/questions', questionsRouter);


app.get('/', (req, res) =>{
    res.send("Trivia World");
});

// app.get('/questions', (req, res) => {
//     res.send("Type a, b, or c for your answer.");
// });

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});