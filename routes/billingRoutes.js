// https://www.npmjs.com/package/stripe

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

// using async & await syntax
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // asynchronously
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};

// using promises
// module.exports = app => {
//   app.post('/api/stripe', (req, res) => {
//     stripe.charges.create({
//       amount: 500,
//       currency: 'usd',
//       description: '$5 for 5 credits',
//       source: req.body.id
//     }, (er, charge) => { // asynchronously })
//   });
// };

