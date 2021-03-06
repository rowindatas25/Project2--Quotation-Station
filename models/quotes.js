const db = require('../db/config.js');
const jshint = require('jshint');
const axios = require('axios');
const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457683&format=json&lang=en';
const Quote = {};

// Axios call with API to display random quote on select quote screen

Quote.getQuote = (req, res, next) => {
    axios.get(API_URL)
        .then((response) => {
            console.log('check out this quote from the models: ');
            res.locals.quote = response.data;
            console.log('response data: ', response.data);
            next();
        })
        .catch((err) => {
            console.log('Error getting quotes!  :');
            console.log(err);
        });
};


// End Axios call

// function to find all quotes and get them displayed
Quote.findAll = (req, res, next) => {
    const user_id = req.user.id;
    db.manyOrNone('SELECT * FROM quotes WHERE user_id = $1', [user_id])
        .then((quoteData) => {
            res.locals.quoteData = quoteData;
            console.log('quoteData from findAll: ', quoteData)
            next();
        });
};


// function to find the quotes by their id
Quote.findById = (req, res, next) => {
    const user_id = req.user.id;
    const id = req.params.id;
    db.one(
        'SELECT * FROM quotes WHERE id = $1 AND user_id = $2', [id, user_id] // use the id here
    ).then((quoteData) => {
        res.locals.quoteData = quoteData;
        next();
    });
};

// function to add a new quote to the database

Quote.create = (req, res, next) => {
    const quote = req.body.quote;
    const author = req.body.author;
    const link = req.body.link;
    const user_id = req.user.id;
    console.log(`user_id inside quote.create: ${user_id}`);
    db.one('INSERT INTO quotes (quote, author, link, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [quote, author, link, user_id]).then((newQuoteData) => {
        console.log('returned newQuoteData: ', newQuoteData);
        res.locals.newQuoteData = newQuoteData;
        next();
    });

};


// function to update a quote and add to the database

Quote.update = (req, res, next) => {
    const id = req.body.id;
    const quote = req.body.quote;
    const author = req.body.author;
    const link = req.body.link;
    const user_id = req.user.id;
    console.log(`user_id inside quote.create: ${user_id}`);
    db.one('UPDATE quotes SET quote = $1, author = $2, link = $3, user_id = $4 WHERE id = $5 returning *', [quote, author, link, user_id, id]).then((editedQuoteData) => {
        console.log('returned editedQuoteData: ', editedQuoteData);
        res.locals.editedQuoteData = editedQuoteData;
        next();
    });

}

// function to delete or destroy quote from database
Quote.destroy = (req, res, next) => {
    const id = req.params.id;
    db.none(
        'DELETE FROM quotes WHERE id = $1', [id]
    ).then(() => {
        next();
    }).catch(err => {
        console.log(`Error deleting quotes: ${err}`);
    })
};






module.exports = Quote;