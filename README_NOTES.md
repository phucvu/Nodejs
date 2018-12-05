//------ DEPLOY TO HEROKU:
// 1. Push to Heroku 
// 2. Tell Heroku to install all dependencies for client project 
// 3. Heroku builds client project

//--- index.js
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

//--- package.json
"scripts": {
  .....
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
},




//------ JS LIB
// expressjs
$npm install --save express

// nodemon
$npm install --save nodemon

// passport: 
//  authentication, login facebook, google, github ...
//  refs: 
//      https://github.com/jaredhanson/passport-google-oauth2
//      https://console.developers.google.com/apis/credentials?project=emaily-dev-223207
$npm install --save passport passport-google-oauth20

// mongoose
//  connect mongo database 
//  refs: 
//      https://mlab.com/databases/emaily-dev-ph#users
//      https://mongoosejs.com/docs/guide.html    
$npm install --save mongoose

// payment 
//  billing via stripe
//  refs:
//      https://stripe.com/
//      https://stripe.com/payments/checkout
//      https://www.npmjs.com/package/stripe
$npm install --save stripe    

// email: sendgrid.com
$npm install --save sendgrid

// helper parser a request 
$npm install --save body-parser

// cookie
$npm install --save cookie-session

// run server & client at the same time
$npm install --save concurrently

// localtunnel: send POST/GET from to world to local in development mode
//              Ex: sendgrid responds to your server in development mode
//   https://localtunnel.github.io/www/
$npm install --save localtunnel

// helper to working with array
$npm install --save lodash path-parser


//------- NODE command
$node
$node index.js      // run js file

$npm init           // create node project

