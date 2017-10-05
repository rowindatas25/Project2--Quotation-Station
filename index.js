const express        = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser     = require('body-parser');
const session = require('express-session');
const pgp = require('pg-promise')();
const jshint = require('jshint');
const port = 3000;

const app  = express();

app.engine('html', mustacheExpress());

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/quote', require('./controllers/quote'));
app.use('/users', require('./controllers/users'));

app.get('/', (req, res) => {
	res.render('index');
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});