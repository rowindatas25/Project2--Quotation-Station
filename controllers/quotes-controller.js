const express = require('express');
const router = express();
const Quote = require('../models/quotes');
const auth = require('../services/auth.js');


/* View Routes */


	 
//show quote view with router.get

router.get('/index', 
	auth.restrict,
	Quote.getQuote, (req, res) => {
	const renderObj = {
		quote: res.locals.quote.quoteText,
		quoteAuthor: res.locals.quote.quoteAuthor,
		quoteLink: res.locals.quote.quoteLink,
		user_id: res.locals.quote.user_id,

	};
		res.render('quotes/index', renderObj);
		console.log('what is the ' + renderObj)
	});


//show new quote view with router.get


router.get('/new',
		auth.restrict, (req, res) => {
		res.render('quotes/new');
		console.log('quotes page working');
});

//show edit quote view with router.get

// router.get('/edit', (req, res) => {
// res.render('quotes/edit');
// })

// show quotes

router.get('/show', 
	auth.restrict,
	Quote.findAll, (req, res) => {
	// const renderObj = {
	// 	// quote: res.locals.quoteData.quoteText,
	// 	// quoteAuthor: res.locals.quoteData.quoteAuthor,
	// 	// quoteLink: res.locals.quoteData.quoteLink,
	// 	// user_id: res.locals.quoteData.user_id,
	// console.log(res.locals.quoteData)
	// };
		res.render('quotes/show', {quote: res.locals.quoteData});
	});


// show single quote view with router.get

router.get('/edit/:id', 
		auth.restrict, 
    Quote.findById,
    (req, res) => {
        console.log('in quote .get with /:quotesId');

        res.render('quotes/edit', {quote: res.locals.quoteData});
    }
);

//show quotes 



/* Api Routes */

// Add a quote to your database with router.post
router.post('/',	
	auth.restrict, 
	Quote.create,
    (req, res) => {
        console.log('trying to add new quote');
        console.log(res.locals.newQuoteData);
        res.render('quotes/show', res.locals.newQuoteData);
    }

);


// edit a quote in your database with router.put

router.put('/:id', auth.restrict, 
  Quote.update,
  (req, res) => {
    res.json(res.locals.editedQuoteData);
  }
);


// remove a quote from database with router.delete

router.delete('/:id',
		auth.restrict,
    Quote.destroy,
    (req, res) => {
        
        res.send('deleted');
    });



module.exports = router;