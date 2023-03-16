require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoute = require('./routes/auth')
const passportAuth = require('./passport')
const app = express();

//MIDDLEWARE
app.use(
  cookieSession({
    name: 'session',
    keys: ['oauth20'],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000',
    // methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
