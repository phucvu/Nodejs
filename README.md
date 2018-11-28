// tao moi nodejs server
$npm init

/////// js lib
// expressjs
$npm install --save express

// nodemon
$npm install --save nodemon

// passport: 
//  authentication, login facebook, google, github ...
//  ref: 
//      https://github.com/jaredhanson/passport-google-oauth2
//      https://console.developers.google.com/apis/credentials?project=emaily-dev-223207
$npm install --save passport passport-google-oauth20


// mongoose
//  connect mongo database 
//  ref: 
//      https://mlab.com/databases/emaily-dev-ph#users
//      https://mongoosejs.com/docs/guide.html    
$npm install --save mongoose

// payment 
//  https://stripe.com/
//  https://stripe.com/payments/checkout
//  https://www.npmjs.com/package/stripe
$npm install --save stripe    // on server side

// helper parser a request 
$npm install --save body-parser

// cookie
$npm install --save cookie-session

// run server & client at the same time
$npm install --save concurrently


// run node 
$node index.js      // run js file
$npm run dev        // run script 

// run in browser
// localhost:5000



