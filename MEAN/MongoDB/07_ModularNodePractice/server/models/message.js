var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MessageSchema = new mongoose.Schema({
    user: String,
    content: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

mongoose.model('Message', MessageSchema)