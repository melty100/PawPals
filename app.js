const express = require('express');
const passport = require("./passport/index");
const cookieSession = require('cookie-session');
const cors = require('cors');
const db = require('./models');
const PORT = process.env.PORT || 8080;

var usersRouter = require('./routes/users');
var questionsRouter = require('./routes/questions');
var commentsRouter = require('./routes/comments');
var indexRouter = require('./routes/index');
var authenticatedRouter = require('./routes/authenticatedRoutes');
var passportRoutes = require('./routes/passportRoutes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(cors());

//Passport setup
app.set('trust proxy', 1) // trust first proxy
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // one day in miliseconds
  name: 'session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/comments', commentsRouter);
app.use('/authenticated', authenticatedRouter);
app.use('/passport', passportRoutes);
app.use('/', indexRouter);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

module.exports = app;