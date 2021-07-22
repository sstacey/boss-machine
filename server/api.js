const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions')


// API Routes
apiRouter.use('/minions', minionsRouter)


module.exports = apiRouter;
