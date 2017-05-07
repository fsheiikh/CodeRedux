var mongoose = require('mongoose')

var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')

module.exports = {
    show: function(req, res)
    {
        Message.find({}, function(err, data)
        {
            res.json({posts: data})
        })
    },

    create: function(req, res)
    {
        var message = new Message(req.body)
        message.save(function(err)
        {
            (err) ? console.log(err) : res.redirect('/messages')
        })
    }

}