var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.get('/', function (req, res, next) {
    let tasks = req.session.tasks || []

    // Get the biggest id used so far.
    let biggestId = 0;
    for (task of tasks) {
        if (task.id > biggestId) {
            biggestId = task.id
        }
    }
    biggestId++;

    // Define a new task and add it to the array.
    let new_task = {id: biggestId, content: 'test'};

    tasks.push(new_task)

    req.session.tasks = tasks

    // Write response
    res.end(JSON.stringify(tasks))
})

app.listen(3000)