const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');


passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// ref: console.developers.google.com
//      https://github.com/jaredhanson/passport-google-oauth2
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne( {googleId: profile.id} ).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile id
          done(null, existingUser);
        } else {
          // we dont have a user record with this ID, make a new record user
          new User( {googleId: profile.id} )
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
