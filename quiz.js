//markTwo: CLI app - FRIENDS Quiz

var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter the name ");
console.log("Welcome " + userName + ", Do you know F.R.I.E.N.D.S \n");
var score = 0;
var highScore = [
  {
    name : "Catherine",
    score : 5,
  },
  {
    name : "Mohana",
    score : 4,
  }
];
var questions = [
  {
    question : "1. Who says this statement 'I don't even have a PLA'? \na.Phoebe  \nb.Rachel\n",
    answer : "a",
  },
  {
    question : "2. What is the name of Rachel's baby? \na.Ben \nb.Emma\n",
    answer : "b",
  },
  {
    question : "3. What is the profession of Joey? \na.Actor \nb.Doctor\n",
    answer : "a",
  },
  {
    question : "4. Joey doesn't share his ? \na.Clothes \nb.Food\n",
    answer : "b",
  },
  {
    question : "5. Who loves to cook? \na.Phoebe \nb.Monica\n",
    answer : "b",
  }
];

function play(questionAsked){
  var userAnswer = readlineSync.question(questionAsked.question);
  if(userAnswer.toUpperCase() === questionAsked.answer.toUpperCase()){
    score = score + 1;
    console.log("You were Right");
  }
  else{
    console.log("You were Wrong");
  }
    console.log("Your score is "+ score + "\n");
}

for(var i=0; i<questions.length; i++){
  play(questions[i]);
}
console.log("Yay,Your final score is "+ score);
console.log("\n High Scores");
console.log("---------------");
for(var i=0; i<highScore.length; i++){
  console.log(highScore[i].name + " " + highScore[i].score);
  if(score >= highScore[i].score){
    console.log("Congrats!! You have bet the highScore. Please share your screenshot to update the highScores!");
  }
}