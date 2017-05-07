var express = require('express')

var path = require('path')

var app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res)
{
    res.render('main')
})




var server = app.listen(9000, function()
{
    console.log('listening on 9000 ...')
})


var io = require('socket.io').listen(server)


var users = []

io.sockets.on('connection', function(socket)
{   
    console.log("In a socket, id is: ", socket.id)
    

    socket.on('new_user', function(data)
    {   
        users.push({user: data.user, id: socket.id})

        //console.log(users)

        io.emit('all_users', {users: users})
    })

    socket.on('disconnect', function(data)
    {
        

    })
  
})



