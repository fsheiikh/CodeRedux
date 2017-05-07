var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new mongoose.Schema({
    user: String,
    content: String,
    _messaage: {type: Schema.Types.ObjectId, ref: 'Message'}
})

mongoose.model('Comment', CommentSchema)