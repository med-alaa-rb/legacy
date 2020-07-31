const auth = require('express').Router();
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const User = require('../model/superUserSchema')


console.log(User)


auth.post('/register', async (req, res) =>{
    const user = new User ({
       name: req.body.name,
       email: req.body.email,
       pass: req.body.pass
    });
    try{
       const savedUser = await user.save();
       res.send(savedUser)
    }catch(err){
        res.status(400).send(err);
    }
});
console.log('eeeeee')


module.exports = auth;

// bcrypt.genSalt(saltRounds, function (err, salt) {
//     if (err) {
//       throw err
//     } else {
//       bcrypt.hash(user1.pass, salt, function(err, hash) {
//         if (err) {
//           throw err
//         } else {
//            console.log(hash)
//           }
//       })
//     }
//   })

// user1.save((err, userData) => {
//   if (err) return console.error(err);
//   console.log(userData.name + " saved to collection");
// });


