const express = require('express')
const ideasRouter = express.Router({mergeParams: true})

const db = require('./db')

const checkMillionDollarIdea = require('./checkMillionDollarIdea')

ideasRouter.param('ideaId', (req, res, next, id) => {
    const foundIdea = db.getFromDatabaseById('ideas', id)
    if (foundIdea) {
        req.idea = foundIdea
        next()
    } else {
        res.status(404).send()
    }
})

ideasRouter.get('/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas')
    res.json(ideas)
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas')
    const newIdea = db.addToDatabase('ideas', {
        id: ideas.length + 1,
        name: req.body.name,
        description: req.body.description,
        weeklyRevenue: Number(req.body.weeklyRevenue),
        numWeeks: Number(req.body.numWeeks)
    })
    res.status(201).json(newIdea)
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea)
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    const updatedIdea = db.updateInstanceInDatabase('ideas', {
        ...req.idea,
        ...req.body
    })
    res.send(updatedIdea)
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    db.deleteFromDatabasebyId('ideas', req.idea.id)
    res.status(204).send()
})

module.exports = ideasRouter