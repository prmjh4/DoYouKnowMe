var readlineSync = require('readline-sync');
var userName= readlineSync.question("Enter your Name ..");
console.log("Welcome "+ userName +" to DO YOU KNOW Prem??");
var score=0;
function quiz(ques,ans){
  var userAns= readlineSync.question(ques);
  if(userAns==ans){
    console.log("Correct!");
    score+=1;
  }else{
    console.log("Wrong!");
  }
  console.log(score);
  console.log("--------");
}
var questions= [{
  question: "When is my birthday?",
  answer:4,
},{
  question: "Where do I live?",
  answer:"guna",
},{
  question: "Where I work?",
  answer:"vois",
},{
  question:"my fav sport is?",
  answer:"volleyball",
}]
for(var i=0; i<questions.length; i++){
  quiz(questions[i].question,questions[i].answer);
}
var scoreBoard= [
  {
    name: 'Ansh',
    score: 3,
  },
  {
    name: 'vansh',
    score:2,
  }
];
if(score>=scoreBoard[0].score){
  console.log("congo for the high score!");
}else{
  console.log("score is " + score);
}
console.log("below is the scoreboard if you have beaten the scoreboard then ping me and i'll update yours!")
for(var j=0; j<scoreBoard.length; j++){
  console.log(scoreBoard[j]);
}
