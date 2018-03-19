/* Quotes from turnerquotes */

var quotes = [
  "It's not what you do; it's how you're perceived",
  "Focus on the things you can change",  
  "Make every contribution count :)",
  "On the inside, I'm like a baby without candy",
  "At the end of every piece of code, there's a human being",
  "A developer who is not optimistic shouldn't be a developer.<h6>Harry Triguboff</h6>",
  "An individual developer like me cares about writing the new code and making it as interesting and efficient as possible. But very few people want to do the testing. <h6>Linus Torvalds</h6>",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in <h6>Edsger Dijkstra</h6>",
  "Software sucks because users demand it to",
  "In order to understand recursion, one must first understand recursion",
  "Nine people can’t make a baby in a month"
];

var generateQuote = function() {
  var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerHTML = random_quote;
  /* Chrome Rendering Issue - No Solution as usual */ 
}

window.onload = generateQuote;
document.onclick = generateQuote;

console.clear();
console.log("Hi");
