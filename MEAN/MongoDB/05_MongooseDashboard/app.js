var express= require('express')
var path = require('path')

var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

//Database Configuration code //
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/05_testDB')

var AnimalSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number
})

mongoose.model('Animal', AnimalSchema)
var Animals = mongoose.model('Animal')
//Database Configuration code ^ //



app.get('/', function(req, res)
{   
    var animals = Animals.find({}, function(err, data)
    {   
        (err)? console.log(err) : res.render('index', {animals: data})
    })
})

app.get('/animals/:id', function(req, res)
{
    var animal = Animals.findOne({_id: req.params.id}, function(err, data)
    {
        (err) ? console.log(err) : res.render('animal', {animal: data})
    })
})

app.get('/new', function(req, res)
{
    res.render('new')
})

app.post('/animals', function(req, res)
{
    var animal = new Animals(req.body)
    animal.save(function(err)
    {
        (err) ? console.log(err) : res.redirect('/')
    })
})

app.get('/animals/edit/:id', function(req, res)
{
    var animal = Animals.findOne({_id: req.params.id}, function(err, data)
    {
        (err)? console.log(err) : res.render('edit', {animal: data})
    })
})

app.post('/edit/:id', function(req, res)
{
   Animals.findOne({_id: req.params.id}, function(err, data)
   {
       if(err) console.log(err)
       else 
       {
           data.name = req.body.name
           data.age = req.body.age
           data.species = req.body.species

           data.save(function(err)
           {
               (err) ? console.log(err) : res.redirect('/')
           })
       }
   })
})

app.post('/destroy/:id', function(req, res)
{
    Animals.remove({_id: req.params.id}, function(err)
    {
        (err) ? console.log(err) : res.redirect('/')
    })
})

app.listen(9000, function()
{
    console.log('listening on 9000 ...')
})
