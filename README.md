# FSJS UNIT 01
One problem, is that a quote doesnt load on the first load until the setInterval kicks in. On line 176 I would suggest calling printQuote() instead of changeQuote() . You will reveal the first quote right away, without breaking any other code. The changeQuote() function will still work and change the quote/background after 20 seconds

In the future, maybe convert to ES6+ syntax once you learn it. 
