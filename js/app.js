'use strict';
// Design a guessing game about you that involves FIVE yes/no questions and TWO other questions.

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

// FIVE YES/NO QUESTIONS:
userName = prompt('Presenting here 7 questions about Drew. Provide your best guesses and don\'t plagiarize! First, though, what can I call you?');

//    1. number of legs >=4? (changed from =2 on day 3 to add another no response)
numLegs = prompt('Okay, let\'s talk legs. Does Drew have 4 or more legs?').toUpperCase();
console.log('Has 4+ legs: ' + numLegs);

if (numLegs === 'NO' || numLegs === 'N') {
  userTally++;
  alert('You said "' + numLegs + '". Good guess. He has less than 4 legs, as a matter fact. ' + userTally + ' point for you. Next question.');
} else if (numLegs === 'YES' || numLegs === 'Y') {
  alert('You said "' + numLegs + '". Wrong. Next question.');
} else {
  alert('I\'m pretty sure that "' + numLegs + '" is not an answer. So... next question.');
}
//    2. still breathing?
breathing = prompt('Is Drew still breathing?', 'please say yes').toUpperCase();
console.log('Still breathing: ' + breathing);

if (breathing === 'YES' || breathing === 'Y') {
  userTally++;
  alert('You said "' + breathing + '". Whew! Okay, you now have ' + userTally + ' point(s). Next question.');
} else if (breathing === 'NO' || breathing === 'N') {
  alert('What?! "' + breathing + '?!" Check his pulse! Stat! Call his wife! Check the I.C.E. on his phone! Quit standing there with your eyes bulging, man!');
} else {
  alert('I\'m just a computer, but I\'m pretty sure "' + breathing + '" is not an answer. You have ' + userTally + ' point(s).');
}

//    3. home planet still Earth?
homePlanet = prompt('Is Drew\'s home planet still Earth?').toUpperCase();
console.log('Still on Earth?: ' + homePlanet);

if (homePlanet === 'YES' || homePlanet === 'Y') {
  userTally++;
  alert('"' + homePlanet + '." Cool. You should give him a call sometime. One more point for you for a total of: ' + userTally);
} else if (homePlanet === 'NO' || homePlanet === 'N') {
  alert('Wrong. He here. In fact, he\'s standing right behind you. You have ' + userTally + ' points.');
} else {
  alert('No comprende, chica.');
}

//    4. troubled gut biota? (changed to 'troubled' from 'healthy' on day 3 to add a no answer)
gutBiota = prompt('Does Drew have a troubled gut biota?').toUpperCase();
console.log('Troubled gut?: ' + gutBiota);

if (gutBiota === 'YES' || gutBiota === 'Y') {
  alert('Wrong. He eats yogurt everyday and drinks kombucha on the reg. You have ' + userTally + ' point(s).');
} else if (gutBiota === 'NO' || gutBiota === 'N') {
  userTally++;
  alert('Very good. But how did you know that? I\'m getting a creepy vibe from you. You now have ' + userTally + ' points, but I\'d kinda like to take away a point.');
} else {
  alert('You said "' + gutBiota + '." Not an answer. I have a question for you, though. Are you gut bacteria with eyes and extremely long fingers?');
}

//    5. # of times heart has been broken?
for (var i = 0; i < 4; i++) {
  heartBreak[i] = prompt('How many times has Drew\'s heart been broken?');
  // guesses added to console
  var guesses = i + 1;
  console.log('Number of heartbreaks, attempt #' + guesses + ': ' + heartBreak[i]);
  // correct answer
  if (heartBreak[i] == 18) {
    userTally++;
    alert('You said \'18\'. You are correct! Wow! How did you guess that? Regardless, you get a point. You now have ' + userTally + '.');
    break;
  // incorrect answers but loop continues
  } else if (i < 3 && heartBreak[i] < 18) {
    alert('You said ' + heartBreak[i] + '. Oh, you sweet naive muckle. More than that. Try again.');
  } else if (i < 3 && heartBreak[i] > 18) {
    alert('You said ' + heartBreak[i] + '. Dude. I mean... I\'ve loved hard but not THAT hard. Less than that. Try again.');
  // if this is the last attempt and still not correct, give following alert
  } else if (i = 3) {
    alert('You said ' + hbAttempts[3] + '. No, none of your guesses were correct. The correct answer WAS 18, but you\'ve just made that number go up to 19. You now have ' + userTally + ' point(s).');
  }
}

//    6. Guess one of the Halloween costumes Drew remembers
costumes = ['steven universe', 'crazy old coot', 'tiger', 'girl in a robert palmer video', 'pee-wee herman', 'ronald reagan', 'popeye', 'bunny'];

costumeList = 'Steven Universe, a crazy old coot, a tiger, a girl in a Robert Palmer video, Pee-wee Herman, Ronald Reagan, Popeye, and a bunny';

// loop for 6 attempts
for (i = 0; i < 6; i++) {
  costumeGuess[i] = prompt('Guess one of the Halloween costumes Drew has worn in the past 40+ years.');
  var cosGuessNum = i + 1;
  console.log('Costume guess #' + cosGuessNum + ': ' + costumeGuess[i]);
  // loop through the costumes array to see if there's a match. if there is, reward and leave loops
  for (var j = 0; j < costumes.length; j++) {
    if (costumeGuess[i].toLowerCase() === costumes[j]) {
      costumeCorrect = true;
      alert('Amazing. You guessed one of the ones he remembers! Here\'s the full list, if you\'re curious: ' + costumeList + '.');
      break;
    }
  } //for loop closing bracket j loop
  if (costumeCorrect === true) {
    break;
  } else if (i < 5) {
    alert('Sorry, no. Try again.');
  } else if (i = 6) {
    alert('Sorry. You didn\'t guess any of the correct costumes. Here\'s the full list that he remembers, if you\'re curious: ' + costumeList + '.');
  }
} //for loop closing bracket i loop


//    7. loves you?
lovesYou = prompt('Final question: does Drew love you?').toUpperCase();
console.log('Does he love you?: ' + lovesYou);

if (lovesYou === 'YES' || lovesYou === 'Y') {
  userTally++;
  alert(lovesYou + '! ' + lovesYou + '! A thousand times, ' + lovesYou + '! And not just because you got ' + userTally + ' points in this game, but because you\'re beautiful. Look at yourself. You are F-O-I-N.');
} else if (lovesYou === 'NO' || lovesYou === 'N') {
  alert(lovesYou + '? ' + lovesYou + '? Dude, I am so happy to tell you that you are wrong. He loves you. And not just because you got ' + userTally + ' points in this game, but because you\'re beautiful. Look at yourself. You are F-O-I-N.');
} else {
  alert(lovesYou + '? ' + lovesYou + '? Gurl, you crazy. Good kind, though. Good kind.');
}

// Print a tally of total points with a comment on user's success
console.log('Total points: ' + userTally);
alert('Okay, ' + userName + '. You finished the game with ' + userTally + ' points.');
if (userTally >= 4) {
  alert('You know Drew very well. Or are a good guesser. Congratulations, ' + userName + '!');
} else if (userTally >= 1) {
  alert('You should probably check the wiki more often, ' + userName + '. Drew\'s a dynamic person, so that thing changes often.');
} else {
  alert('You didn\'t get any of the questions correct, ' + userName + '. That\'s cool. ... No... No, those aren\'t tears. It must be raining.');
}
