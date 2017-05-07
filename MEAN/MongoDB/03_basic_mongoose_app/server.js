var express = require('express')

var path = require('path')

var mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/03_testDB');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

mongoose.model('User', UserSchema)
var User = mongoose.model('User')



var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res)
{   
    var users = User.find({}, function(err, data)
    {   
        if(err) console.log(err)
        else
        {
            res.render('index', {users: data})
        }       
    })

   // res.render('index')
    
})

app.post('/user', function(req, res)
{
    console.log(req.body)
    var user = new User(req.body)

    user.save(function(err)
    {
        if(err) console.log(err)
        else
        {
            console.log("Added a new user")
        }
    })

    res.redirect('/')
})

app.listen(9000, function()
{
    console.log('listening on 9000 ... ')
})