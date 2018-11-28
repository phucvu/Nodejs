// prod.js - production keys here!!
module.exports = {
  // google auth
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  
  // mongo in Mlab
  mongoURI: process.env.MONGO_URI,
  mongoURL: process.env.MONGO_URL,
  mongoUsername: process.env.MONGO_USERNAME,
  mongoPassword: process.env.MONGO_PASSWORD,

  // cookie
  cookieKey: process.env.COOKIE_KEY,

  // payment - stripe
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};