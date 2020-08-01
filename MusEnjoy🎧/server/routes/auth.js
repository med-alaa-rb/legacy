const auth = require('express').Router();
const bcrypt = require("bcrypt");
const {userData} = require('../model/superUserSchema');
const { singUpSchema, loginSchema} = require('../validation')

//  console.log(loginSchema)

auth.post('/register', async (req, res) =>{
    
   const { error } = await singUpSchema.validateAsync(req.body);
   if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await userData.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');
 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.pass, salt)

    const user = new userData ({
       name: req.body.name,
       email: req.body.email,
       pass: hash
    });
    try{
       const savedUser = await user.save();
       res.send(`${user.name} saved to db`)
    }catch(err){
        res.status(400).send(err);
    }
});

auth.post('/login', async (req, res) => {
    // const validation = loginSchema.validate(req.body);    
    // res.send(validation);

    const { error } = await loginSchema.validateAsync(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userData.findOne({email: req.body.email});
    if(!user) return res.status(400).send(`Email dosent exists`);
    
    const validPass = await bcrypt.compare(req.body.pass, user.pass)
     if(!validPass) return res.status(400).send('Invalid password')

    res.send('Logged in!')
});


module.exports = auth;



