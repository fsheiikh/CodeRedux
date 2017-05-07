var mongoose = require('mongoose')

var fs = require('fs')

var path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/07_testDB')

var models = path.join(__dirname, '../models')

fs.readdirSync(models).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models + '/' + file);
  }
});