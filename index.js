const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

const usersController = require('./controllers/users-controller');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const logger = require('morgan');

// body-parser setup.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view configuration.
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

const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
})
app.use('/quotes', require('./controllers/quotes-controller'));
app.use('/users', usersController);

app.use(logger('dev'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

