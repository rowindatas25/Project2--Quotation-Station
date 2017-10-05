const express        = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser     = require('body-parser');
const session = require('express-session');
const pgp = require('pg-promise')();
const jshint = require('jshint');
const port = 3000;

const app  = express();

// declaring mustache to use in the HTML


app.engine('html', mustacheExpress());

app.set('view engine', 'html');

//setting the route into the views folder

app.set('views', __dirname + '/views');

// use the public directory 


app.use(express.static(__dirname + '/public'));

// Important: mount express middleware BEFORE passport middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// ====================================================================
// PASSPORT STUFF
const passport = require('passport');
const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);

// END PASSPORT STUFF
// ====================================================================

// MUST BE TRUE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setting the route to the controllers
app.use('/quote', require('./controllers/quote'));
app.use('/users', require('./controllers/users'));


// Initial call to the home page
app.get('/', (req, res) => {
	res.render('index');
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});