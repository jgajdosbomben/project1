import PromptSync from "prompt-sync";

const prompt = PromptSync();

let name = prompt("Enter your name: ");
console.log(`Hello ${name}`);