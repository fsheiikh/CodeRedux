var http = require('http')
var fs = require('fs')

var app = http.createServer(function(req, res)
{
    console.log("url is: ", req.url)
    
    if(req.url === '/')
    {
        fs.readFile('./views/index.html', 'utf8', function(err, data)
        {   
            if(err) console.log(err)

            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }

    else if(req.url === '/cats')
    {
        fs.readFile('./images/cat.jpg', function(err, data)
        {   
            if(err) console.log(err)

            console.log(data)
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(data)
            res.end()

           
        })
    }


    
})

app.listen(9000, function()
{
    console.log("listening on 9000")
})