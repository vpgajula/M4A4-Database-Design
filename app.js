const express = require('express');
const morgan = require('morgan');

const customerRouter = require('./routes/customerRoutes');
const loansRouter = require('./routes/loanRoutes');
const loansLedgerRouter = require('./routes/loanLedgerRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

// 3) ROUTES
//app.use('/api/v1/loans', loansRouter);

module.exports = app;
