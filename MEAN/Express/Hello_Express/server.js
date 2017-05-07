// we need to require the Express module
var express = require('express')

// require body-parser
var bodyParser = require('body-parser');
// use it!

var session = require('express-session')

var app = express()
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: "thisIsASessionEncryption"}))


// we are going to invoke the function returned to the express variable. 
// Requiring "express" returns a "CreateApplication" function that we store
// in the express variable before we invoke it.



//Now that we have created our express app, let's use it to handle requests:

app.get('/', function(req, res)
{
    ///res.send("<h1>Hello World</h1>")
    res.render('index1', {title: "my Express project"}); //from views folder   
})

app.post('/users', function(req, res) //from index1.html from views
{   
    req.session.name = req.body.name;

    console.log("Session Name: ", req.session.name)
    console.log(req.body)
    res.redirect('/users')
    res.end()
})

// let's tell our server to use a static file 
//folder to handle requests for static content!
app.use(express.static(__dirname + '/static')) //for static .html requested pages


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 

// Now lets set the view engine itself so that express knows that we are 
//using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// Let's add a new route to our server.js file that will 
// render an ejs view and pass it some user data.

app.get("/users", function (request, response)
{
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array}); //users.ejs
    console.log(users_array)
})

app.get('/users/:id', function(req, res)
{   
    
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
})

app.listen(9000, function()
{
    console.log("listening on 9000...")
})