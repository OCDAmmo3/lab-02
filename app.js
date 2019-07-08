"use script";

startGame();

function startGame(){

  var userName;
  userName = prompt("Welcome! What's your name?");
  alert("Hey " + userName + ", glad you're here!");
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
}

function questionOne() {

  var questionOne = prompt("Did I skip a grade in elementary school?");
//Prompts question upon entry to site.
  var answerOne = questionOne.toLowerCase().trim();

  console.log(answerOne);
//prints the users answer to the question in the console
  if(answerOne === "yes" || answerOne === "y")
  {
    alert("You're a winner! I finished first grade after Christmas break, then finished that school year off in second grade.");
  } else if(answerOne === "no" || answerOne === "n") {
    alert("You failed.")
    alert("I actually graduated when I was 16 too.")
    alert("But thanks.")
  } else {
    alert("Yes or No answers please.");
  }
//if they get it right (yes), it tells them they're correct. No results in a negative and insulting response. If neither yes/y or no/n is given, it asks for yes or no answers only, and moves on.
}

//from here, it repeats the process of the first question, with different questions and answers. If it works why change it?
function questionTwo() {

  var questionTwo = prompt("Is it my goal in life to be successful?");

  var answerTwo = questionTwo.toLowerCase().trim();

  console.log(answerTwo);

  if(answerTwo === "yes" || answerTwo === "y")
  {
    alert("You failed. While it would be nice to be successful in life, my only goal in life is to make a positive impact on people with everything I do.");
  } else if(answerTwo === "no" || answerTwo === 'n')
  {
    alert("Winner! I know success will come, but I also know that I'd gain more from having a positive impact on people around me with the things I do. That's my goal in life.")
  } else {
    alert("Yes or No answers please.");
  }
}

function questionThree() {

  var questionThree = prompt("Do I enjoy cooking?");

  var answerThree = questionThree.toLowerCase().trim();

  console.log(answerThree);

  if(answerThree === "yes" || answerThree === "y")
  {
    alert("Absolutely. If I'm not working, or I suppose now not learning/coding, I'm watching many many YouTube videos on cooking. Mainly different ways to cook steak. If you've got money, I've got a barbecue for you.")
  } else if(answerThree === "no" || answerThree === "n")
  {
    alert("Heck yes I do. I love it. I'm very much a movie and computer guy, but if I'm not doing any of that, I'm cooking/learning about cooking. It's an enjoyable pass time for me.")
  } else {
    alert("Yes or No answers please.");
  }
}

function questionFour() {

  var questionFour = prompt("Do I like kids?");

  var answerFour = questionFour.toLowerCase().trim();

  console.log(answerFour);

  if(answerFour === "yes" || answerFour === "y")
  {
    alert("Heck yeah. Kids are the best. I don't know what it is, but whenever there's kids around me, I just get an energy that makes me able to run for 40 miles. Literally.")
  } else if(answerFour === "no" || answerFour === "n")
  {
    alert("You must think me evil. Kids are the best thing. They're the definition of anti-conflict. Sure, they want the toy, but they aren't going to let that ruin relationships. Friends are friends.")
  } else {
    alert("Yes or No answers please.");
  }
}

function questionFive() {
  var questionFive = prompt("Is baseball the best sport in America?");

  var answerFive = questionFive.toLowerCase().trim();

  console.log(answerFive);

  if(answerFive === "yes" || answerFive === "y")
  {
    alert("Yes. The answer is yes. It's America's pass time.")
  } else if(answerFive === "no" || answerFive === "n")
  {
    alert("You have failed.")
    alert("Baseball was and always will be a gift from America. The greatest gift.")
  } else {
    alert("Yes or No answers please.");
  }
}
/*

I THOUGHT I WAS MEANT TO DO 2 EXAMPLES OF THE SAME QUESTION TYPE, SO THIS WAS MY FIRST QUESTION 6. TAKES AN ARRAY LIKE QUESTION 7 DOES, BUT QUESTION 7 RECEIVED CHANGES I NEVER IMPLEMENTED ON THIS ONE, AS I CHANGED THIS ONE TO A NUMBER ANSWER QUESTION INSTEAD.

function questionSix(){

  var heroes = ["avengers","justice league","fantastic four","x-men","guardians of the galaxy","x-force","ravagers"];
  var tries = 0;
  var userAnswerCorrect = 0;

//tried doing === 7 at first and it just jumped out after the first guess, not responding at all. Realized I needed !== instead as I'm trying to do something until it's equal to 7, not doing something while it's equal to 7.
  while(tries !== 7){
    var userAnswer = prompt("Can you name 7 of my favorite superhero teams?");
    var fixedAnswer = userAnswer.toLowerCase().trim();
    //Had trouble getting the first answer to respond as correct. Fixed with >= rather than just >.
    if (heroes.indexOf(fixedAnswer) >= 0) {
      alert(userAnswer + " is definitely one of the best.")
      userAnswerCorrect++;
      //took a while to think of how to give them their score at the end.
    } else {
      alert("Honestly not too sure about that one, but I can at least say that's not one that I had on my list.");
    }
    tries++;
  }
  alert("Here's my list:  Avengers, Justice League, Fantastic Four, X-Men, Guardians of the Galaxy, X-Force, and the Ravagers.")
  alert("You got " + userAnswerCorrect + " out of " + heroes.length + " right. I'm impressed.");
}*/

function questionSix() {

  
}

function questionSeven() {
//question 7 went easily after fixing out all the bugs from question 6.
  var villains = ["legion of doom","sinister six","brotherhood","league of shadows","suicide squad","children of thanos"]
  var tries2 = 0;
  var userAnswerCorrect2 = 0;

  while(tries2 !== 6) {
    var userAnswer = prompt("How about 6 of my favorite villain groups?");
    var fixedAnswer = userAnswer.toLowerCase().trim();
    var index = villains.indexOf(userAnswer);
    if (villains.indexOf(fixedAnswer) >= 0) {
      alert("Nice! " + userAnswer + " is quite evil indeed.")
      userAnswerCorrect2++;
      villains.splice(index, 1);
    } else {
      alert("Well if that's one of them, it's not one I know. Sorry.");
    }
    tries2++;
  }
  alert("Well here's my villain list too:  Legion of Doom, Sinister Six, Brotherhood, League of Shadows, Suicide Squad, and then I tagged on the Children of Thanos too, because... well they suck.")
  alert("You got " + userAnswerCorrect2 + " out of 6 right. I'm impressed yet again.");
}
