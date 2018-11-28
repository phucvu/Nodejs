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
      proxy: true         /// fix google call back http:localhost:5000//auth/google/callback -> https://localhost:3000/.....
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id});

      if (existingUser) {
        return done(null, existingUser);
      } 

      const user = await new User({googleId: profile.id}).save();
      done(null, user);
    }
  )
);
