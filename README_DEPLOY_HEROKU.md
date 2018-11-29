// Option 1: Build client project -> Commit build project -> Push to Heroku

// Option 2:  1. Push to Heroku 
//            2. Tell Heroku to install all dependencies for client project 
//            3. Heroku builds client project


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