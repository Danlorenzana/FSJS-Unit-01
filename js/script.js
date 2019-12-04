/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of objects containing some random Seinfeld lines.
var quotes = [
  {
    quote: 'That\'s a shame...',
    source: 'Jerry',
    citation: '', // Jerry's tag line that is said across multiple episodes and seasons; example of two missing properties.
    year: '',
    headWriter: '' // 5th property added to CSS sheet as well.
  },
  {
    quote: 'Hello!',
    source: 'Uncle Leo',
    citation: '', // Uncle Leo's tag line that is said across multiple episodes and seasons; example of two missing properties.
    year: '',
    headWriter: ''
  },
  { quote: 'Kramer\'s cooking up some corduroy',
    source: 'Jerry',
    citation: 'The Calzone',
    year: '7',
    headWriter: '#LarryDavid'
  },
  { quote: 'Drop your purse, and pick up that medicine ball.',
    source: 'Izzy Mandelbaum',
    citation: 'The Blood',
    year: '9',
    headWriter: ''
  },
  { quote: 'You\'re a Man\'s Woman. You hate other women, and they hate you.',
    source: 'Kramer',
    citation: 'The Pool Guy',
    year: '9',
    headWriter: ''
  },
  { quote: 'But, I don\'t want to be a pirate!',
    source: 'Jerry',
    citation: 'The Puffy Shirt',
    year: '5',
    headWriter: '#LarryDavid'
  },
  { quote: 'Festivus begins with the airing of grievances. I got a lot of problems with you people! And now you\'re gonna hear about it!',
    source: 'Frank',
    citation: 'The Strike',
    year: '9',
    headWriter: ''
  },
  { quote: 'No soup for you!!',
    source: 'Soup Nazi',
    citation: 'The Soup Nazi',
    year: '7',
    headWriter: '#LarryDavid'
  },
  { quote: 'I\'m Cosmo Kramer, the Assman!',
    source: 'Kramer',
    citation: 'The Fusilli Jerry',
    year: '6',
    headWriter: '#LarryDavid'
  },
  { quote: 'Because I chose not to run!',
    source: 'Jerry',
    citation: 'The Race',
    year: '6',
    headWriter: '#LarryDavid'
  },
  { quote: 'We had a pact!',
    source: 'George',
    citation: '', // George's famous line used at the begining and end of the season; missing episode property.
    year: '7',
    headWriter: '#LarryDavid'
  },
  { quote: 'I love a good nap. Sometimes it’s the only thing getting me out of bed in the morning.',
    source: 'George',
    citation: 'The Nap',
    year: '8',
    headWriter: ''
  },
  { quote: 'Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.',
    source: 'Jerry',
    citation: 'The Voice',
    year: '9',
    headWriter: ''
  },
  { quote: 'Moles — freckles’ ugly cousin.',
    source: 'Kramer',
    citation: 'The Slicer',
    year: '9',
    headWriter: ''
  },
  { quote: 'People don’t turn down money! It’s what separates us from the animals.',
    source: 'George',
    citation: 'The Apartment',
    year: '2',
    headWriter: '#LarryDavid'
  },
  { quote: 'What’s the deal with lampshades? I mean if it’s a lamp, why do you want shade?',
    source: 'Jerry',
    citation: 'The Butter Shave',
    year: '9',
    headWriter: ''
  },
  { quote: 'Oh, understudies are a very shifty bunch. The substitute teachers of the theatre world.',
    source: 'Jerry',
    citation: 'The Understudy',
    year: '6',
    headWriter: '#LarryDavid'
  },
  { quote: 'Can you die from an odour? I mean, like if you were locked in a vomitorium for two weeks, could you actually die from the odour?',
    source: 'Elaine',
    citation: 'The Alternate Side',
    year: '3',
    headWriter: '#LarryDavid'
  },
  { quote: 'You already have an in. You have the same first name. Jerry.',
    source: 'George',
    citation: 'The Strongbox',
    year: '9',
    headWriter: ''
  }
];
var quoteReload ;

// Function generates random number and is assigned to select an object from 'quotes'variable
function getRandomQuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length );
  var randomQuote = quotes[randomNumber] ;
  return randomQuote;
}
/*  Function generates a random hexadecimal color with 'JavaScript Basics' [my] level code
    -> https://stackoverflow.com/questions/1484506/random-color-generator */
function getRandomColor() {
  var letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
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
    if (quote.citation !== '' ) {
      report += '<span class="citation"> ' + quote.citation + '</span>';
    } if (quote.year !== '' ) {
        report += '<span class="year"> Season ' + quote.year + '</span>';
      } if (quote.writer !== '' ) {
        report += '<span class="headWriter"> ' + quote.headWriter + '</span>';
        }
    report += '</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = report;
// Stops the setInterval(); to prevent interuption.
    stopQuote() ;
// Restarts the changeQuote() from 0 secs; the two back-to-back functions reset the interval.
    changeQuote ();
// Adds in-line CSS to style the background color of the 'body' tag -> https://www.w3schools.com/jsref/prop_html_style.asp
    document.getElementsByTagName("BODY")[0].style.backgroundColor = getRandomColor();
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
