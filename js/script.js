/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of objects containing some random Seinfeld lines. 
var quotes = [
  {
    quote: 'That\'s a shame...', 
    source: 'Jerry', 
    season: '', // Jerry's tag line that is said across multiple episodes and seasons; example of two missing properties.
    episode: '',
    writer: '' // 5th property added to CSS sheet as well. 
  },
  {
    quote: 'Hello!', 
    source: 'Uncle Leo', 
    season: '', // Uncle Leo's tag line that is said across multiple episodes and seasons; example of two missing properties.
    episode: '',
    writer: ''
  },
  { quote: 'Kramer\'s cooking up some corduroy', 
    source: 'Jerry', 
    episode: 'The Calzone', 
    season: '7',
    writer: '#LarryDavid'
  },
  { quote: 'Drop your purse, and pick up that medicine ball.', 
    source: 'Izzy Mandelbaum', 
    episode: 'The Blood', 
    season: '9',
    writer: ''
  },
  { quote: 'You\'re a Man\'s Woman. You hate other women, and they hate you.', 
    source: 'Kramer', 
    episode: 'The Pool Guy', 
    season: '9',
    writer: ''
  },
  { quote: 'But, I don\'t want to be a pirate!', 
    source: 'Jerry', 
    episode: 'The Puffy Shirt', 
    season: '5',
    writer: '#LarryDavid'
  },
  { quote: 'Festivus begins with the airing of grievances. I got a lot of problems with you people! And now you\'re gonna hear about it!', 
    source: 'Frank', 
    episode: 'The Strike', 
    season: '9',
    writer: ''
  },
  { quote: 'No soup for you!!', 
    source: 'Soup Nazi', 
    episode: 'The Soup Nazi', 
    season: '7',
    writer: '#LarryDavid'
  },
  { quote: 'I\'m Cosmo Kramer, the Assman!', 
    source: 'Kramer', 
    episode: 'The Fusilli Jerry', 
    season: '6',
    writer: '#LarryDavid'
  },
  { quote: 'Because I chose not to run!', 
    source: 'Jerry', 
    episode: 'The Race', 
    season: '6',
    writer: '#LarryDavid'
  },
  { quote: 'We had a pact!', 
    source: 'George', 
    episode: '', // George's famous line used at the begining and end of the season; missing episode property. 
    season: '7',
    writer: '#LarryDavid'
  },
  { quote: 'I love a good nap. Sometimes it’s the only thing getting me out of bed in the morning.', 
    source: 'George', 
    episode: 'The Nap', 
    season: '8',
    writer: ''
  },
  { quote: 'Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.', 
    source: 'Jerry', 
    episode: 'The Voice', 
    season: '9',
    writer: ''
  },
  { quote: 'Moles — freckles’ ugly cousin.', 
    source: 'Kramer', 
    episode: 'The Slicer', 
    season: '9',
    writer: ''
  },
  { quote: 'People don’t turn down money! It’s what separates us from the animals.', 
    source: 'George', 
    episode: 'The Apartment',  
    season: '2',
    writer: '#LarryDavid'
  },
  { quote: 'What’s the deal with lampshades? I mean if it’s a lamp, why do you want shade?', 
    source: 'Jerry', 
    episode: 'The Butter Shave',  
    season: '9',
    writer: ''
  },
  { quote: 'Oh, understudies are a very shifty bunch. The substitute teachers of the theatre world.', 
    source: 'Jerry', 
    episode: 'The Understudy', 
    season: '6',
    writer: '#LarryDavid'
  },
  { quote: 'Can you die from an odour? I mean, like if you were locked in a vomitorium for two weeks, could you actually die from the odour?', 
    source: 'Elaine', 
    episode: 'The Alternate Side',  
    season: '3',
    writer: '#LarryDavid'
  },
  { quote: 'You already have an in. You have the same first name. Jerry.', 
    source: 'George', 
    episode: 'The Strongbox', 
    season: '9',
    writer: ''
  }
];
var message = ' ';
var quoteReload ;

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
      report += '<span class="episode"> ' + quote.episode + '</span>'; 
    } if (quote.season !== '' ) {
        report += '<span class="season"> Season ' + quote.season + '</span>';
      } if (quote.writer !== '' ) {
        report += '<span class="writer"> ' + quote.writer + '</span>';
        }
    report += '</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = report;
// Stops the setInterval(); to prevent interuption.       
    stopQuote() ; 
// Restarts the changeQuote() from 0 secs; the two back-to-back functions reset the interval.     
    changeQuote ();
// Adds in-line CSS to style the background color of the 'body' tag -> https://www.w3schools.com/jsref/prop_html_style.asp     
    var bgColor = document.getElementsByTagName("BODY")[0].style.backgroundColor = getRandomColor();
}
// Auto-refresh the printQuote to run every 20sec.
function changeQuote() {
  quoteReload = setInterval(printQuote , 20000)
}
// Stops the set 'quoteReload' interval. 
function stopQuote() {
  clearInterval(quoteReload);
}
changeQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
