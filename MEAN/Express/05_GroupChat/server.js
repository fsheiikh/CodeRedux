var express = require('express')

var path = require('path')

var app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')


app.get('/', function(req, res)
{
    res.render('index')
})


var server = app.listen(9000, function()
{
    console.log("listening on 9000 ...")
})

var io = require('socket.io').listen(server)
var users = []
var messages = []

io.sockets.on('connection', function(socket)
{
    console.log("In a socket ", socket.id)

    socket.on('new_user', function(data)
    {
        users.push(data.user)
    })

    socket.on('new_message', function(data)
    {
        messages.push(data)

        io.emit('update_messages', {messages: messages})
    })
})