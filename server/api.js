const express = require('express');
const apiRouter = express.Router();

const db = require('./db')

apiRouter.get('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions')
    res.json(minions)
})

apiRouter.post('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions')
    const addedNewMinion = db.addToDatabase('minions', {
        id: minions.length + 1,
        name: req.body.name,
        title: req.body.title,
        weaknesses: req.body.weaknesses,
        salary: Number(req.body.salary)
    })
    res.send(addedNewMinion)
})

apiRouter.get('/minions/:minionId', (req, res, next) => {
    res.send('post minions')
})

apiRouter.put('/minions/:minionId', (req, res, next) => {
    res.send('post minions')
})

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    res.send('post minions')
})

module.exports = apiRouter;
