var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    user: String,
    message : String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

mongoose.model('Message', MessageSchema)