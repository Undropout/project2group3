var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var keys = require("../keys.js");

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      // clientID: keys.google.consumer_key,
      // clientSecret: keys.google.consumer_secret,
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "https://tranquil-inlet-29364.herokuapp.com/auth/google/callback"
    },
    function(token, tokenSecret, profile, done) {
      console.log(profile.name.givenName, " ", profile.name.familyName, " ", profile.id);
      db.Chore.findOne({ where: { googleid: profile.id } }).then(function(dbUser) {
        if (!dbUser) {
          db.Chore.create({
            googleid: profile.id,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            accounttype: "0"
          }).then(function() {
            return done(null, profile);
          })
        } else {
          return done(null, profile);
        }
      })

      // db.User.create({ displayname: profile.displayName }, function(err, user) {
      //   return done(err, user);
      // });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
