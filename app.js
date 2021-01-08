//REQUIREMENTS
const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//IMPORTS
const { sessionSecret } = require('./config');
const { sequelize } = require('./db/models');
const { restoreUser } = require('./auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const projectRouter = require('./routes/project');
const furnitureRouter = require('./routes/furnitureType');


//APP SETUP
const app = express();
app.set('view engine', 'pug');

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

const store = new SequelizeStore({ db: sequelize });

//ROUTES
app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(restoreUser);
// create Session table if it doesn't already exist
store.sync();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', projectRouter);
app.use('/furniture-type', furnitureRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
