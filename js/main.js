/* Quotes from turnerquotes */

var quotes = [
  "It's not what you do; it's how you're perceived",
  "Don't be a follower because you'll just see an arsehole",
  "If you're given chips and beans every day, you're gonna eat chips and beans",
  "Just because you've dodged a bullet doesn't mean they've stopped firing at you",
  "Why would you run a marathon if you didn't know where the finish line was?",
  "Focus on the things you can change",
  "Designed by champions, built by warriors",
  "Do blind pigeons find their way home?",
  "Make every year count :)",
  "On the inside, I'm like a baby without candy",
  "At the end of every piece of code, there's a human being",
  "If you poke the bear, the bear ain't gonna like it",
  "You can make as many cakes as you want, but if no-one's going to eat them, they're useless",
];

var generateQuote = function() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  $('#quote').html(rand); 
  /* Chrome Rendering Issue - No Solution as usual */ 
}

window.onload = generateQuote;
$(document).on('click', generateQuote); 

console.log("Hey Dev, Come on, let's be psychos together!!!")
