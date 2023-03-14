const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '103739131642-96fejfjpn1c8c04kf6rpsph8hkokrarf.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
