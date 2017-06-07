'use strict'
// Design a guessing game about you that involves FIVE yes/no questions.
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

// Use promptfor input and alert for output to the user, unless you are working on the third Stretch Goal.
// Do not use any 'switch' statements in your JavaScript.
// Do not write any functions in your JavaScript.
// Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.
var userTally = 0;
// FIVE YES/NO QUESTIONS:
alert('Here are 5 questions about Drew. Please answer either Yes or No.');
//    1. number of legs > 1?
var numLegs = prompt('First off, let\'s talk legs. Does Drew have more than 1 leg, but less than or equal to 3?').toUpperCase();
console.log('Has >1 leg and <=3: ' + numLegs);

if (numLegs === 'YES' || numLegs === 'Y') {
  userTally++;
  alert('You said "' + numLegs + '". Good guess. But have you actually ever seen both legs in the same room at the same time? ' + userTally + ' point for you. Next question.');
  // But have you actually ever seen both legs in the same room at the same time? ' userTally + ' point for you. Next question.');
} else if (numLegs === 'NO' || numLegs === 'N') {
  alert('You said "' + numLegs + '". Wrong. Next question.');
} else {
  alert('I\'m pretty sure that "' + numLegs + '" is not an answer. So... next question.');
}
//    2. still breathing?
var breathing = prompt('Is Drew still breathing?', 'please say yes').toUpperCase();
console.log('Still breathing: ' + breathing);

if (breathing === 'YES' || breathing === 'Y') {
  userTally++;
  alert('You said "' + breathing + '". Whew! Okay, you now have ' + userTally + ' points. Next question.');
} else if (breathing === 'NO' || breathing === 'N') {
  alert('What?! "' + breathing + '?!" Check his pulse! Stat! Call his wife! Check the I.C.E. on his phone! Quit standing there with your eyes bulging, man!');
} else {
  alert('I\'m just a computer, but I\'m pretty sure "' + breathing + '" is not an answer. You have ' + userTally + ' points.');
}
//    3. home planet still Earth?
var homePlanet = prompt('Is Drew\'s home planet still Earth?').toUpperCase();
console.log('Still on Earth?: ' + homePlanet);

if (homePlanet === 'YES' || homePlanet === 'Y') {
  userTally++;
  alert('"' + homePlanet + '." Cool. You should give him a call sometime. One more point for you for a total of: ' + userTally);
} else if (homePlanet === 'no' || homePlanet === 'n') {
  alert('Wrong. He here. In fact, he\s standing right behind you. You have ' + userTally + ' points.');
} else {
  alert('No comprende, chica.');
}

//    4. healthy gut biota?
var gutBiota = prompt('Does Drew have a healthy gut biota?').toUpperCase();
console.log('Healthy gut?: ' + gutBiota);

if (gutBiota === 'YES' || gutBiota === 'Y') {
  userTally++;
  alert('Very good. But how did you know that? I\'m getting a creepy vibe from you. You now have ' + userTally + ' points, but I\'d kinda like to take away a point.');
} else if (gutBiota === 'NO' || gutBiota === 'N') {
  alert('Wrong. He eats yogurt everyday and drinks kombucha on the reg. You have ' + userTally + ' points.');
} else {
  alert('You said "' + gutBiota + '." Not an answer. I have a question for you, though. Are you gut bacteria with eyes and extremely long fingers?');
}
//    5. loves you?
var lovesYou = prompt('Final question: does Drew love you?').toUpperCase();
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
alert('You finished the game with ' + userTally + ' points.');
if (userTally >= 4) {
  alert('You know Drew very well. Or are a good guesser. Congratulations!');
} else if (userTally >= 1) {
  alert('You should probably check the wiki more often. Drew\'s a dynamic person, so that thing changes often.');
} else {
  alert('You didn\'t get any of the questions correct. That\'s cool. ... No... No, those aren\'t tears. It must be raining.');
}