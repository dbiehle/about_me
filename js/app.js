'use strict';
// A guessing game about me that involves FIVE yes/no questions,
//  ONE guess-the-number question, and ONE guess one of the items on a list.

// global variables declared
var userTally = 0;
var userName;
var numLegs;
var breathing;
var homePlanet;
var gutBiota;
var heartBreak = [];
var costumes = [];
var costumeList;
var costumeGuess = [];
var costumeCorrect = false;
var lovesYou;
var allQuestions = [question1,question2,question3,question4,question5,question6,question7,endLogic];

//  Introduction to quiz
userName = prompt('Presenting here 7 questions about Drew. Provide your best guesses and don\'t plagiarize! First, though, what may I call you?');
if (!userName) {
  alert('Oops! You forgot to answer that one, so I\'m just going to call you "SOMEONE WHO CANNOT READ INSTRUCTIONS"');
  userName = 'SOMEONE WHO CANNOT READ INSTRUCTIONS';
}
console.log('User\'s name: ' + userName);

//  Logged to console to see which question the user is on
for(var i = 0; i < allQuestions.length; i++ ) {
  console.log('This is the value of i: ' + i);
  allQuestions[i]();
}

//    1. number of legs >=4?
function question1(){
  numLegs = prompt('Okay, ' + userName + ', let\'s talk legs. Does Drew have 4 or more legs?');
  while (!numLegs) {
    numLegs = prompt('Oops. You forgot to answer, that one, ' + userName + '. Try again. Does Drew have 4 or more legs?');
  }
  console.log('Has 4+ legs: ' + numLegs);

  numLegs = numLegs.toUpperCase();
  if (numLegs === 'NO' || numLegs === 'N') {
    userTally++;
    alert('You said "' + numLegs + '". Good guess, ' + userName + '. He has less than 4 legs, as a matter fact. ' + userTally + ' point for you. Next question.');
  } else if (numLegs === 'YES' || numLegs === 'Y') {
    alert('You said "' + numLegs + '". Wrong, ' + userName + '! Next question.');
  } else {
    alert('I\'m pretty sure that "' + numLegs + '" is not an answer. So... No points for you, ' + userName + '. Next question.');
  }
}

//    2. still breathing?
function question2(){
  breathing = prompt('Is Drew still breathing?', 'please say yes');
  while (!breathing) {
    breathing = prompt('Oops. You forgot to answer, that one, ' + userName + '. Try again. And make haste, man! Is Drew still breathing?!');
  }
  console.log('Still breathing: ' + breathing);

  breathing = breathing.toUpperCase();
  if (breathing === 'YES' || breathing === 'Y') {
    userTally++;
    alert('You said "' + breathing + '". Whew! Okay, you now have ' + userTally + ' point(s). Next question.');
  } else if (breathing === 'NO' || breathing === 'N') {
    alert('What?! "' + breathing + '?!" Check his pulse! Stat! Call his wife! Check the I.C.E. on his phone! Quit standing there with your eyes bulging, ' + userName + '!');
  } else {
    alert('I\'m just a computer, but I\'m pretty sure "' + breathing + '" is not an answer. You have ' + userTally + ' point(s)... ' + userName + '.');
  }
}

//    3. home planet still Earth?
function question3(){
  homePlanet = prompt('Is Drew\'s home planet still Earth?');
  while (!homePlanet) {
    homePlanet = prompt('Oops. You forgot to answer, that one, ' + userName + '. Try again. Does Drew still live on Earth?');
  }
  console.log('Still on Earth?: ' + homePlanet);
  homePlanet = homePlanet.toUpperCase();

  if (homePlanet === 'YES' || homePlanet === 'Y') {
    userTally++;
    alert('"' + homePlanet + '." Cool. You should give him a call sometime. One more point for you, ' + userName + ', for a total of: ' + userTally);
  } else if (homePlanet === 'NO' || homePlanet === 'N') {
    alert('Wrong. He here. In fact, he\'s standing right behind you. You have ' + userTally + ' point(s).');
  } else {
    alert('No comprende, chica.');
  }
}

//    4. troubled gut biota?
function question4(){
  gutBiota = prompt('Does Drew have a troubled gut biota?');
  while (!gutBiota) {
    gutBiota = prompt('Oops. You forgot to answer, that one, ' + userName + '. Try again. Does Drew have tummy issues?');
  }
  console.log('Troubled gut?: ' + gutBiota);

  gutBiota = gutBiota.toUpperCase();

  if (gutBiota === 'YES' || gutBiota === 'Y') {
    alert('Wrong. He eats yogurt everyday and drinks kombucha on the reg. You have ' + userTally + ' point(s).');
  } else if (gutBiota === 'NO' || gutBiota === 'N') {
    userTally++;
    alert('Very good. But how did you know that? I\'m getting a creepy vibe from you. You now have ' + userTally + ' point(s), but I\'d kinda like to take away a point.');
  } else {
    alert('You said "' + gutBiota + '." Not an answer. I have a question for you, though. Are you a gut bacterium with eyes and extremely long fingers... ' + userName + '?');
  }
}

//    5. # of times heart has been broken?
function question5(){
  for (var i = 0; i < 4; i++) {
    heartBreak[i] = prompt('How many times has Drew\'s heart been broken?');
    // guesses added to console
    var guesses = i + 1;
    console.log('Number of heartbreaks, attempt #' + guesses + ': ' + heartBreak[i]);
    // correct answer
    if (heartBreak[i] == 18) {
      userTally++;
      alert('You said \'18\'. You are correct! Wow, ' + userName + '! How did you guess that? Regardless, you get a point. You now have ' + userTally + '.');
      break;
    // incorrect answers but loop continues
    } else if (i < 3 && heartBreak[i] < 18) {
      alert('You said ' + heartBreak[i] + '. Oh, you sweet naive mucket. More than that. Try again.');
    } else if (i < 3 && heartBreak[i] > 18) {
      alert('You said ' + heartBreak[i] + '. Dude. I mean... He\'s loved hard but not THAT hard. Less than that. Try again.');
    } else if (i < 3 && typeof heartBreak[i] === 'string') {
      alert('As much as I love weird responses, you should just try guessing again, but a number this time, ' + userName + '.');
    // if this is the last attempt and still not correct, give following alert
    } else if (i = 3) {
      alert('You said ' + heartBreak[3] + '. No, none of your guesses were correct. In actuality, Drew\'s heart has been broken 18 times. But you\'ve just made that number go up to 19. You now have ' + userTally + ' point(s).');
    }
  }
}

//  6. Guess one of the Halloween costumes Drew remembers
function question6(){
  costumes = ['steven universe', 'crazy old coot', 'tiger', 'girl in a robert palmer video', 'pee-wee herman', 'ronald reagan', 'popeye', 'bunny'];

  costumeList = 'Steven Universe, a crazy old coot, a tiger, a girl in a Robert Palmer video, Pee-wee Herman, Ronald Reagan, Popeye, and a bunny';

  for (var i = 0; i < 6; i++) {
    costumeGuess[i] = prompt('Guess one of the Halloween costumes Drew has worn in the past 40+ years.');
    while (!costumeGuess[i]) {
      costumeGuess[i] = prompt('Oops. You forgot to answer, that one, ' + userName + '. Try again. Type in a Halloween costume Drew might have worn.');
    }
    var cosGuessNum = i + 1;
    console.log('Costume guess #' + cosGuessNum + ': ' + costumeGuess[i]);
    // loop through the costumes array to see if there's a match. if there is, reward and leave loops
    for (var j = 0; j < costumes.length; j++) {
      if (costumeGuess[i].toLowerCase() === costumes[j]) {
        userTally++;
        costumeCorrect = true;
        alert('Amazing. You guessed one of the ones he remembers! Here\'s the full list, if you\'re curious: ' + costumeList + '.');
        break;
      }
    }
    if (costumeCorrect === true) {
      break;
    } else if (i < 5) {
      alert('Sorry, no. Try again. (' + costumeGuess[i] + '? Really?) ');
    } else if (i = 6) {
      alert('Sorry, ' + userName + '. You didn\'t guess any of the correct costumes. Here\'s the full list that he remembers, if you\'re curious: ' + costumeList + '.');
    }
  }
}

//  7. loves you?
function question7(){
  lovesYou = prompt('Final question: does Drew love you?');
  while (!lovesYou) {
    lovesYou = prompt('Oops. You forgot to answer, that one, ' + userName + '. Try again. Does Drew love you?');
  }
  console.log('Does he love you?: ' + lovesYou);

  lovesYou = lovesYou.toUpperCase();

  if (lovesYou === 'YES' || lovesYou === 'Y') {
    userTally++;
    alert(lovesYou + '! ' + lovesYou + '! A thousand times, ' + lovesYou + '! And not just because you got ' + userTally + ' points in this game, but because you\'re beautiful. Look at yourself, ' + userName + '. You are F-O-I-N.');
  } else if (lovesYou === 'NO' || lovesYou === 'N') {
    alert(lovesYou + '? ' + lovesYou + '? Dude, I am so happy to tell you that you are wrong. He loves you. And not just because you got ' + userTally + ' points in this game, but because you\'re beautiful. Look at yourself, ' + userName + '. You are F-O-I-N.');
  } else {
    alert(lovesYou + '? ' + lovesYou + '? Gurl, you crazy. Good kind, though. Good kind.');
  }
}

// Prints a tally of total points with a comment on user's success
function endLogic(){
  console.log('Total points: ' + userTally);
  alert('Okay, ' + userName + '. You finished the game with ' + userTally + ' points.');
  if (userTally >= 5) {
    alert('You know Drew very well. Or are a good guesser. Congratulations, ' + userName + '!');
  } else if (userTally >= 1) {
    alert('You should probably check the wiki more often, ' + userName + '. Drew\'s a dynamic person, so that thing changes often.');
  } else {
    alert('You didn\'t get any of the questions correct, ' + userName + '. That\'s cool. ... No... No, those aren\'t tears. It must be raining.');
  }
}
