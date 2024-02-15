
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

// Routes
var index = require('./routes/index');
var app = express();

// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// view engine setup    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serving of static files in Express
app.use(express.static(path.join(__dirname, 'public')));

// Flood protection
app.use(express.json({
  limit:'1mb'
}))

app.use(express.urlencoded({
  extended: true
}));

// Sets up express.router to intercept all incoming traffic
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // Wipe the stack trace if production
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {
    status: "",
    stack: ""
  };

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
