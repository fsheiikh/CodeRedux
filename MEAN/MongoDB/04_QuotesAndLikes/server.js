var express = require('express')

var path = require('path')

var app = express()


var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/04_testDB')
var QuotesSchema = new mongoose.Schema({
    user: String,
    quotes: [{
                quote: {type: String, required: true},
                likes: {type: Number, default: 0}
            }]
})

mongoose.model('Quote', QuotesSchema)
var Quotes = mongoose.model('Quote')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res)
{
    res.render('index')
})

app.get('/quotes', function(req, res)
{   
    var quotes = Quotes.find({}, function(err, data)
    {
        if(err) console.log(err)
        else
        {
            res.render('quotes', {quotes: data})
        }
    })
})

app.post('/quote', function(req, res)
{
    var quote = new Quotes
    quote.user = req.body.name
    quote.quotes.push({quote: req.body.quote})

    quote.save(function(err)
    {
        if(err) console.log(err)
        else
        {
            console.log("Added a new quote")
            res.render('quotes')
        }
    })
})

app.post('/like/:id', function(req, res)
{
    var quotes = Quotes.find({}, function(err, data)
    {   
        console.log("1")
        if(err) console.log(err)
        else
        {
            console.log(data)
            data.forEach(function(quote1)
            {
                quote1.quotes.forEach(function(quote2)
                {
                    console.log(quote2)
                    if(quote2._id == req.params.id)
                    {   
                        console.log(quote2.likes)
                        quote2.likes += 1;
                        quote1.save(function(err)
                        {
                            if(err) console.log(err)
                            else
                                console.log("Liked a quote")
                                res.redirect('/quotes')
                        })
                    }

                })
            })
           
        }

    })
})








app.listen(9000, function()
{
    console.log('Listening on 9000 ...')
})