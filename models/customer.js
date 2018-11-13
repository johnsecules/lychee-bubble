var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustomerSchema = new Schema(
  {
    fname: {type: String, required: true, max: 100},
    lname: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    phone: {type: Number},
    email: {type: String} 
  }
);

// Virtual for author's URL
CustomerSchema
.virtual('url')
.get(function () {
  return '/customer/' + this._id;
});

//Export model
module.exports = mongoose.model('Customer', CustomerSchema);