/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of objects containing 'gold' Seinfeld lines. 
var quotes = [
  {
    quote: 'That\'s a shame...', 
    source: 'Jerry', 
    season: '', 
    episode: '' 
  },
  { quote: 'Kramer\'s cooking up some corduroy', 
    source: 'Jerry', 
    episode: 'The Calzone', 
    season: '7'
  },
  { quote: 'Drop your purse, and pick up that medicine ball.', 
    source: 'Izzy Mandelbaum', 
    episode: 'The Blood', 
    season: '9'
  },
  { quote: 'You\'re a Man\'s Woman. You hate other women, and they hate you.', 
    source: 'Kramer', 
    episode: 'The Pool Guy', 
    season: '9'
  },
  { quote: 'But, I don\'t want to be a pirate!', 
    source: 'Jerry', 
    episode: 'The Puffy Shirt', 
    season: '5'
  },
  { quote: 'Festivus begins with the airing of grievances. I got a lot of problems with you people! And now you\'re gonna hear about it!', 
    source: 'Frank', 
    episode: 'The Strike', 
    season: '9'
  },
  { quote: 'No soup for you!!', 
    source: 'Soup Nazi', 
    episode: 'The Soup Nazi', 
    season: '7'
  },
  { quote: 'I\'m Cosmo Kramer, the Assman!', 
    source: 'Kramer', 
    episode: 'The Fusilli Jerry', 
    season: '6'
  },
  { quote: 'Because I chose not to run!', 
    source: 'Jerry', 
    episode: 'The Race', 
    season: '6'
  },
  { quote: 'We had a pact!', 
    source: 'George', 
    episode: '', 
    season: '7'
  },
  { quote: 'You already have an in. You have the same first name. Jerry.', 
    source: 'George', 
    episode: 'The Strongbox', 
    season: '9'
  }
];
var message = ' ';

// Function generates random number and is assigned to select an object from 'quotes'variable 
function getRandomQuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length ); 
  var randomQuote = quotes[randomNumber] ;
  return randomQuote;
}
// Function generates a random hexadecimal color with 'JavaScript Basics' [my] level code -> https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*  
The 'getRandomQuote' is formated to HTML code (only with the available data).  
The HTML block is sent to the ID tag in the HTML document.  
*/
function printQuote (){
    var quote = getRandomQuote () ;
    var report = '<p class="quote">' + quote.quote + '</p>';
    report += '<p class="source">' + quote.source ;
    if (quote.episode !== '' ) {
      report += '<span class="citation"> ' + quote.episode + '</span>'; 
    } if (quote.season !== '' ) {
        report += '<span class="year"> season ' + quote.season + '</span>';
      }
    report += '</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = report;

// Adds in-line CSS to style the background color of the 'body' tag -> https://www.w3schools.com/jsref/prop_html_style.asp     
    var bgColor = document.getElementsByTagName("BODY")[0].style.backgroundColor = getRandomColor();
}

// Auto-refresh the printQuote function using setInterval() to run every 20sec
setInterval(printQuote , 20000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
