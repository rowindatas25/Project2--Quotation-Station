const db = require('../db/config.js');
const jshint = require('jshint');
const axios = require('axios');
const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en';
const Quote = {};

// ==============================================
// Helper functions!
// Do you see what they're doing?

// Arguments: req.params, and the string name of some parameter
// Returns: the parameter value (extracted from req.params) as a number
// If the parameter isn't there, or isn't a number, throws an error
function numericParam(reqParams, parameterName) {
    if (typeof parameterName !== 'string') {
        throw new Error('parameterName must be a string!')
    }
    const paramString = reqParams[parameterName];
    if (paramString === undefined) {
        throw new Error(parameterName + ' is undefined!');
    }
    const param = Number(paramString);
    if (isNaN(param)) {
        throw new Error('param is not a number! paramString: ' + paramString);
    }
    return param;
}


// Quote.getQuote = (req, res, next) => {
// 	axios.get(API_URL)
// 		.then((response) => {
// 			console.log('check out this quote from the models: ');
// 			// console.log(response);
// 			res.locals.quote = response;
// 			next();
// 		})
// 		.catch((err) => {
// 			console.log('ERROR IN QUOTE SERVICE!  :');
// 			console.log(err)
// 		})
// }

















module.exports = Quote;