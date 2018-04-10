const path = require('path');
const logger = require('morgan');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// connect to the database and load models
// this will be changed
//require('./models').connect(config.dbUri);

// pass the authenticaion checker middleware
const authCheck = require('./middleware/authCheck');
app.use('/user', authCheck);

// routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/user', userRouter);


module.exports = app;
