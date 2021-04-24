// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye".
(function (window) {
  var myIIFE = {};
  myIIFE.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  myIIFE.names.forEach(speakFunction);

  function speakFunction(item) {
    var firstLetter = item.charAt(0).toLowerCase();
    firstLetter === 'j' ? byeSpeaker.speak(item) : helloSpeaker.speak(item);
  }
  window.myIIFE = myIIFE;
})(window);

