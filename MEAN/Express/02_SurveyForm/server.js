var express = require('express')

var path = require('path')

var bodyParser = require('body-parser')

var app = express()



app.use(bodyParser.urlencoded({extended: true}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')


app.get('/', function(req, res)
{
    res.render('index.ejs')
})

// app.post('/survey', function(req, res)
// {
//     //console.log(req.body.name)
//     //res.render('survey', {survey: req.body})
//     //res.redirect('/')
//     res.end()
// })


var server = app.listen(9000, function()
{
    console.log("Listening at 9000 ...")
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket)
{
    console.log("We are on a socket")

    socket.on("form-submitted", function(data)
    {
        

        var reformattedText = "This was submitted by " + data.name + " from " + data.location
                                + " who likes " + data.language + " and commented " + 
                                data.comment
        console.log(reformattedText)
        
        //should be socket.emit() or socket.broadcast.emit()
        io.emit("server_response", {response: reformattedText})
    })
})