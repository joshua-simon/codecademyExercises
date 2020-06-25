//building GET and POST routes

const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

app.get('/api/quotes/random',(req,res) => {
  let randomQuote = getRandomElement(quotes);
res.send({quote: randomQuote});
})

app.get('/api/quotes', (req, res) => {
  let quoteMatch;
  let quoteSearch = req.query.person;
  if (quoteSearch == undefined) {  
    res.send({quotes: quotes})
  } else {
    quotesMatch = quotes.filter(quote => {
      return quote.person == quoteSearch && quote;
    });
    if (quoteMatch) {
      res.send({ quotes: quotesMatch });
    } else {
      res.status(404).send('Author not found!! 😡');
    }
  }
})

app.post('/api/quotes', (req,res, next) => {
  const newQuoteText = req.query.quote;
  const newQuotePerson = req.query.person;
  if(newQuoteText && newQuotePerson){
    quotes.push({quote: newQuoteText, person: newQuotePerson})
    res.send({quote: {quote: newQuoteText, person: newQuotePerson}})
  } else {
    res.status(400).send()
  }
})