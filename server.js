import express from "express";
import { router } from "./router.js";

const app = express();

const PORT = 4000;

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});

app.use(express.json());

app.use('/questions', router);

app.get('/', (req, res) =>{
    res.send("Trivia World");
});