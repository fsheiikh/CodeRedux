var mongoose = require('mongoose')

var messages = require('../controllers/messages.js')
var comments = require('../controllers/comments.js')

module.exports = function(app){
    app.get('/messages', function(req, res)
    {
        messages.show(req, res)
    }),

    app.get('/', function(req, res)
    {
        res.render('index')
    }),

    app.post('/message', function(req, res)
    {
        messages.create(req, res)
    })
}