import express from "express";
import {testRouter} from './testRouter.js';

const app = express();

const PORT = 4000;

app.use(express.json());

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) =>{
    res.send("Trivia World");
});

app.get('/questions', (req, res) => {
    res.send("Hello");
});

