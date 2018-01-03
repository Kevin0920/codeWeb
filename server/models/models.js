var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: {type: String, required: true, index: {unique: true}},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  password: {type: String, required: true},
  user_level: {type: Number, required: true},
}, {timestamps: true})
var User = mongoose.model("User", UserSchema);
