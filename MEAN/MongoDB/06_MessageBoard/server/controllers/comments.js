var mongoose = require('mongoose')

var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')

module.exports = {
 create:function(req, res)
    {
        Message.findOne({_id: req.params.id}, function(err, msg)
        {   
            if(err) console.log(err)
            else
            {   

                var comment = new Comment(req.body)
                
                comment._message = msg._id
                
                msg.comments.push(comment)
                comment.save(function(err)
                {
                    if(err) console.log(err)
                    else
                    { 
                    msg.save(function(err)
                    {
                        if(err) console.log(err)
                        else res.redirect('/') 
                    })   
                    }
                })
            }
            

        })
    }
}