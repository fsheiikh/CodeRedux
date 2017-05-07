var mongoose = require('mongoose')

var Schema = mongoose.Schema;


var CommentSchema = new mongoose.Schema({
    user: String,
    comment: String,
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true})



mongoose.model('Comment', CommentSchema)