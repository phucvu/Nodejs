// prod.js - production keys here!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  mongoURL: process.env.MONGO_URL,
  mongoUsername: process.env.MONGO_USERNAME,
  mongoPassword: process.env.MONGO_PASSWORD,
  cookieKey: process.env.COOKIE_KEY
};

// sample
//   module.exports = {
//     googleClientID: '30521372967-ustq5a8bn8qu05om407733ftheoch56d.apps.googleusercontent.com',
//     googleClientSecret: 'LNtgZwqTYNzqLlwIB6zayzKx',
//     mongoURI: 'mongodb://phucvu:123456q@ds123151.mlab.com:23151/emaily-dev-ph',
//     mongoURL: 'mongodb://ds115154.mlab.com:15154/emaily-pro-ph',
//     mongoUsername: 'phucvu',
//     mongoPassword: '123456q',
//     cookieKey: 'hxiasla;dlaoem932mnx329nad;29ndaf'
//   };
