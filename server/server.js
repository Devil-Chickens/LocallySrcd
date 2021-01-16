const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

/* require routers here */

// parsing any JSON body we get first
app.use(express.json());

// flow check -> quick check what requests we get from the client instead of checking the Network Tab in Chrome DevTools
app.use((req, res, next) => {
  console.log(`
  *** FLOW METHOD ***\n
  URL: ${req.url}\n
  BODY: ${req.body}\n
  METHOD: ${req.method}\n`);
  return next();
});

// put route handlers //

/*** MAIN PAGE ***/

// directs the request to the assets folder for images
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
// for the devServer
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// catch all
app.use('*', (req, res, next) => {
  return res.status(404).send("This is not the page you're looking for...");
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'Interval Server Error' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;