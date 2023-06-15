const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('./models/user');

//passport.use is how we add the specific strategy plugin that we will use to our passport implementation
exports.local = passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

























//whenever we use sessions in passport, we will need to serialize and deserialize the instance.