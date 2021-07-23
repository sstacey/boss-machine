const express = require('express')
const minionsRouter = express.Router({mergeParams: true})

const db = require('./db')

minionsRouter.param('minionId', (req, res, next, id) => {
    const foundMinion = db.getFromDatabaseById('minions', req.params.minionId)
    if (foundMinion) {
        req.minion = foundMinion
        next()
    } else {
        res.status(404).send()
    }
})

minionsRouter.param('workId', (req, res, next, id) => {
    const foundWork = db.getFromDatabaseById('work', req.params.workId)
    if (foundWork) {
        req.work = foundWork
        next()
    } else {
        res.status(404).send()
    }
})

minionsRouter.get('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions')
    res.json(minions)
})


minionsRouter.post('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions')
    const { name, title, weaknesses, salary } = req.body
    if (name && salary) {
        const newMinion = db.addToDatabase('minions', {
            id: minions.length + 1,
            name,
            title,
            weaknesses,
            salary: Number(salary)
        })
        res.status(201).json(newMinion)
    } else {
        res.status(500).send('Name and salary required to create new minion.')
    }
})

minionsRouter.get('/:minionId', (req, res, next) => {
        res.json(req.minion)
})

minionsRouter.put('/:minionId', (req, res, next) => {
    const updatedMinion = db.updateInstanceInDatabase('minions', {
        ...req.minion,
        ...req.body
    })
    res.json(updatedMinion)
})

minionsRouter.delete('/:minionId', (req, res, next) => {
    db.deleteFromDatabasebyId('minions', req.minion.id)
    res.status(204).send()
})

minionsRouter.get('/:minionId/work', (req, res, next) => {
    const workList = db.getAllFromDatabase('work').filter((work) => work.minionId === req.minion.id)
    res.json(workList)
})

minionsRouter.post('/:minionId/work', (req, res, next) => {
    const id = db.getAllFromDatabase('work').length + 1
    const newWork = db.addToDatabase('work', {
        id,
        ...req.body,
        hours: Number(req.body.hours)
    })
    res.status(201).json(newWork)
})

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if (req.minion.id === req.work.minionId) {
        const updatedWork = db.updateInstanceInDatabase('work', {
            ...req.work,
            ...req.body
        })
        res.send(updatedWork)
    } else {
        res.status(400).send()
    }   
})

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    db.deleteFromDatabasebyId('work', req.work.id)
    res.status(204).send()
})

module.exports = minionsRouter

