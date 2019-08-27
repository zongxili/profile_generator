const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionArr = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let ansArr = [];

//helper function here
const generateProf = function(index, questionArr) {
  if (index === questionArr.length) {
    console.log(`Hello, my name is ${ansArr[0]}. I like to ${ansArr[1]} while listening to ${ansArr[2]}. My favourite meal is ${ansArr[3]} and my favourite thing to eat for that meal is ${ansArr[4]}. My favourite sport is ${ansArr[5]} and my super power is ${ansArr[6]}.`);
    rl.close();
  } else {
    rl.question(questionArr[index], (answer) => {
      ansArr.push(answer);
      generateProf((index + 1), questionArr);
    });
  }
};

generateProf(0, questionArr);