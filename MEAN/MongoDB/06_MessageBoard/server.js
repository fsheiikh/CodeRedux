var express = require('express')

var path = require('path')

var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

//DB Code 
require('./server/config/mongoose.js')


var routes = require('./server/config/routes.js')
routes(app)





app.listen(9000, function()
{
    console.log('Listening on 9000 ...')
})