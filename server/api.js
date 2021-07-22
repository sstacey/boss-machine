const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions')
const ideasRouter = require('./ideas')


// API Routes
apiRouter.use('/minions', minionsRouter)
apiRouter.use('/ideas', ideasRouter)


module.exports = apiRouter;
