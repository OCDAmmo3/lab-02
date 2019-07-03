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
    alert("Anyways, that's all I got. Whether you did good or not, here's your chance to learn more about me.")
  } else if(answerFive === "no" || answerFive === "n")
  {
    alert("You have failed.")
    alert("Baseball was and always will be a gift from America. The greatest gift.")
    alert("Anyways, that's all I got. Whether you did good or not, here's your chance to learn more about me.")
  } else {
    alert("Yes or No answers please.");
  }
}

function questionSix() {
  var questionSix = prompt("What kind of jobs have I worked in the past?");

  var answerSix = questionSix.toLowerCase().trim();

  console.log(answerSix);

  if(answerSix === "pizza making" || answerSix === "serving" || answerSix === "insurance sales" answerSix === "bartending")
  {
    
  }
}
