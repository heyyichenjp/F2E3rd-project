var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const log4js = require("log4js");
const jsSHA = require('jssha');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'dateFile', filename: './logs/cheese.log' }
  },
  categories: {
    default: { appenders: ['file', 'console'], level: 'all' }
  }
 });

 var logger = log4js.getLogger('default');
 app.use(log4js.connectLogger(logger, { level: 'auto'
}));

var logger = log4js.getLogger('default');
app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use routes.js
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
