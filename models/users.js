const bcrypt = require('bcryptjs');
const db = require('../models/quote');
const jshint = require('jshint');
const User = {};


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









module.exports = User;