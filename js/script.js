/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// We list all global variables at the top.
// An array with a random choosing of Seinfeld lines. 
var quotes = [
  {
    quote: 'That\'s a shame...', 
    source: 'Jerry', 
    season: '', 
    episode: '' 
  },
  {
    quote: 'Cooking up some Cordaroy', 
    source: 'Jerry', 
    season: '', 
    episode: 'The Calzone'
  },
  {
    quote: 'It\'s go time!', 
    source: 'Mandelbaum', 
    season: '8', 
    episode: 'The Blood'
  },
  {
    quote: 'Oh the humanity!', 
    source: 'Newman', 
    season: '9', 
    episode: 'The Pothole'
  },
  {
    quote: 'But I don\'t want to be a pirate!!', 
    source: '5b', 
    season: '', 
    episode: 'The Puffy Shirt'
  },
  {
    quote: 'Now for the feats of strength', 
    source: 'Frank', 
    season: '', 
    episode: 'The Festivus'
  },
  {
    quote: 'No soup for you!!', 
    source: 'Soup Nazi', 
    season: '', 
    episode: 'The Soup Nazi'
  },
  {
    quote: 'All aboard the pain train.', 
    source: 'Izzy Mandelbaum', 
    season: '', 
    episode: 'The Blood'
  },
  {
    quote: 'Fredo was a stupid bird!', 
    source: 'Kramer', 
    season: '', 
    episode: 'The Safe'
  }
];
var message = ' ';
// Function generates random number and is assigned to select an object from 'quotes'variable 
function getRandomQuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length ); 
  var randomQuote = quotes[randomNumber] ;
  return randomQuote;
}
/*  
The 'getRandomQuote' is formated to HTML code (only with the available data).  
The HTML block is sent to the ID tag in the HTML document.  
*/
function printQuote (){
    var quote = getRandomQuote () ;
    var report = '<p class="quote">' + quote.quote + '</p>';
    report += '<p class="source">' + quote.source ;
    if (quote.season !== '' ) {
      report += '<span class="citation"> season ' + quote.season + '</span>'; 
    } if (quote.episode !== '' ) {
        report += '<span class="year"> episode: "' + quote.episode + '"</span>';
      }
    report += '</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = report;
    var bgColor = document.getElementsByTagName("body").style.color = "blue";  // TRYING to figure this out
}
// Auto-refresh the quote using setInterval() to run printQuote every 20sec
setInterval(printQuote , 20000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
