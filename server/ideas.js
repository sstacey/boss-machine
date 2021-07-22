const express = require('express')
const ideasRouter = express.Router({mergeParams: true})

const db = require('./db')

ideasRouter.get('/', (req, res, next) => {
    const ideas = db.getAllFromDatabase('ideas')
    res.json(ideas)
})


module.exports = ideasRouter