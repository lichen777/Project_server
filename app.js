const path = require('path');
const logger = require('morgan');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const config = require('./config/index.json')

const passport = require('passport')
app.use(passport.initialize())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// connect to the database and load models

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || config.dbUri

require('./models').connect(MONGODB_URI);

// pass the authenticaion checker middleware
const authCheck = require('./middleware/authCheck');
//app.use('/user', authCheck);

// routes
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);

require('./config/passport')(passport)

module.exports = app;
