const express = require('express');
const apiRouter = express.Router();

const db = require('./db')

apiRouter.get('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions')
    res.json(minions)
})

apiRouter.post('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions')
    const { name, title, weaknesses, salary } = req.body
    if (name && salary) {
        const newMinion = db.addToDatabase('minions', {
            id: minions.length + 1,
            name,
            title,
            weaknesses,
            salary: Number(req.body.salary)
        })
        res.send(newMinion)
    } else {
        res.status(500).send('Name and salary required to create new minion.')
    }
    
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
