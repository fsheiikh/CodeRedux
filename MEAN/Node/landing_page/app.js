var http = require('http')
var fs = require('fs')

var app = http.createServer(function(req, res)
{
    console.log("url is : ", req.url)

    if(req.url === '/')
    {
        fs.readFile('index.html', 'utf8', function(err, data)
        {
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url === '/dojos/new')
    {
        fs.readFile('dojos.html', 'utf8', function(err, data)
        {
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(req.url === 'ninjas')
    {
        fs.readFile('ninjas.html', 'utf8', function(err, data)
        {
            res.writeHead(200, {'Content-type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else
    {
        res.write("Hello")
        res.end()
    }

})

app.listen(9000, function()
{
    console.log("listening on 9000...")
})