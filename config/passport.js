const LocalStrategy = require('passport-local').Strategy
const User = require('mongoose').model('User');
const bcrypt = require('bcrypt-nodejs')
const config = require('../config');


// expose this function to our app using module.exports
module.exports = function (passport) {


  // LOCAL SIGNUP ============================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, function (req, email, password, done) {

    const userData = {
      ...req.body,
      email: email,
      password: generateHash(password)
    };
    const newUser = new User(userData);
    newUser.save((err) => {
      if (err) { return done(err); }

      return done(null);
    })
  }))

  // LOCAL LOGIN =============================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, function (req, email, password, done) { // callback with email and password from our form

    const userData = {
      email: email,
      password: password
    };

    // find a user by email address
    return User.findOne({ email: userData.email }, (err, user) => {
      if (err) { return done(err); }

      if (!user) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      if (!validPassword(password, user.password)){
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      return done(null, user);
      });
  }))
}

var generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

var validPassword = function (password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword)
}
