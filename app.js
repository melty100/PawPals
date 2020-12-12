var createError = require('http-errors');
var express = require('express');
var session = require("express-session");
var passport = require("./config/passport");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = process.env.PORT || 8080;

var usersRouter = require('./routes/users');
var questionsRouter = require('./routes/questions');
var commentsRouter = require('./routes/comments');
var indexRouter = require('./routes/index');
var authenticatedRouter = require('./routes/authenticatedRoutes');

const cors = require('cors')
var db = require("./models");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/comments', commentsRouter);
app.use('/authenticated', authenticatedRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Passport setup
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

module.exports = app;
