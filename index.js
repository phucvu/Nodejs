const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//mongoose.connect(encodeURI(keys.mongoURI), { useNewUrlParser: true });
mongoose.connect(
  encodeURI(keys.mongoURL),
  {
    auth: {
      user: keys.mongoUsername,
      password: keys.mongoPassword
    },
    useNewUrlParser: true
  }
);

//
const app = express();

//---- middlewares
// req
app.use(bodyParser.json()); // before send req should parse the body to json

// cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// to understand the syntax:
//  const authRoutes = require('./routes/authRoutes');
//  authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// tell express server production kind of requests: 
if ((process.env.NODE_ENV = 'production')) {
  // Express will serve up production assets
  // like or main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// set dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
