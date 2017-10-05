const express = require('express');
const router = express();
const Quote = require('../models/quote');
// const jshint = require('jshint');
/* View Routes */

router.get('/',
		(req, res) => {
			res.send('this works.')
		});
	 
//show quote view with router.get




//show new quote view with router.get




//show edit quote view with router.get




//show single quote view with router.get




/* Api Routes */

// Add a quote to your database with router.post



// edit a quote in your database with router.put




// remove a quote from database with router.delete












module.exports = router;