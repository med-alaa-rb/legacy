const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const auth = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  pass: {
    type: String,
    trim: true,
    required: true,
  },
});

var userData = mongoose.model("userData", auth);

var user1 = new userData({
  name: "insaf",
  pass: "eeee",
});

bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      throw err
    } else {
      bcrypt.hash(user1.pass, salt, function(err, hash) {
        if (err) {
          throw err
        } else {
          console.log(hash)
          }
      })
    }
  })

user1.save((err, userData) => {
  if (err) return console.error(err);
  console.log(userData.name + " saved to collection");
});

module.exports = userData;
