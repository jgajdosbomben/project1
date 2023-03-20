// import PromptSync from "prompt-sync";

import { createInterface } from "readline";

// let letter2 = "Hi";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });

    readline.question('Your answer: ', letter => {
    console.log(`You selected: ${letter}`);
    // letter2 = letter;
    readline.close();
  });

//   console.log(letter2);
// const name = prompt("What is your name?");
// console.log(`Hi ${name}`);

