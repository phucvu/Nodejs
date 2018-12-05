//----- fix "proxy" in settings 
1) In the client/ directory install this package:
$npm install http-proxy-middleware --save

2) Create setupProxy.js file in client/src/ directory. There is no need to import this file anywhere, CRA looks for a file by this name and loads it.

3) Then add this to the setupProxy.js file:
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
}

4) Remember to remove the old proxy scripts code from your client side package.json (or you will still get the same errors)

5) Restart start your servers with npm run dev and the proxies should now work as expected. Note - Anytime you make a change to the proxy or the Google Project's URI or Origins settings you should restart the server.


// --- libs 
// Materialize CSS
$npm install --save materialize-css@next

// redux
$npm install --save redux react-redux react-router-dom
$npm install --save redux-thunk
$npm install --save axios
$npm install --save redux-form        

// payment
//  refs:
//      https://dashboard.stripe.com/test/dashboard
//      https://github.com/azmenak/react-stripe-checkout
//      https://www.npmjs.com/package/stripe
$npm install --save react-stripe-checkout
