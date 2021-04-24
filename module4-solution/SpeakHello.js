(function (window) {
  var helloSpeaker = {};
  // yaakovGreeter.name = "Yaakov";
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;

})(window);


