var express = require("express")
var path = require("path")

var app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res)
{
    res.render('index')
})

var server = app.listen(8000, function()
{
    console.log("listening on 8000 ... ")
})


var io = require('socket.io').listen(server)

var count = 0;

io.sockets.on('connection', function(socket)
{   
    console.log("in a socket")
    console.log(socket.id)

    socket.on("button-clicked", function(data)
    {   
        count++
        console.log("socket data from client is: ", data)
        
        //could be socket.emit() or socket.broadcast.emit
        io.emit("serverSocket", {"count": count}) //must be in the same callback
    })

    
})