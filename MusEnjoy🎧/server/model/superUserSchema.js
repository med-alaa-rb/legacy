const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User = new Schema({
    
  name: {
    type: String
    // trim: true,
    // required: true,
    // minlength: 3,
    // maxlength: 50
  },
  email: {
    type: String
    // trim: true,
    // required: true,
    // minlength: 5,
    // maxlength: 255,
    // unique: true
  },
  pass: {
    type: String
    // trim: true,
    // required: true,
    // minlength: 3,
    // maxlength: 25
  },
});

const userData = mongoose.model("userData", User);




module.exports.userData = userData;
module.exports.User = User;
