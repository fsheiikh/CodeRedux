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

app.post('/survey', function(req, res)
{
    console.log(req.body.name)
    res.render('survey', {survey: req.body})
    res.end()
})


app.listen(9000, function()
{
    console.log("Listening on 9000...")

})
