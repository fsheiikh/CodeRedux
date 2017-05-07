var mongoose = require('mongoose')

var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')

module.exports = {
 show: function(req, res)
    {   
        Message.find({}).populate('comments').exec(function(err, data)
        {
            (err) ? console.log(err) : res.render('index', {posts: data})
        })

    },

create: function(req, res)
    {
        var message = new Message(req.body)
        message.save(function(err)
        {
            (err) ? console.log(err) : res.redirect('/')
        })
    }

   
}