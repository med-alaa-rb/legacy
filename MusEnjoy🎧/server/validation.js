const joi = require('@hapi/joi');
// const  {User} = require('./model/superUserSchema');




    const singUpSchema = joi.object({
        name: joi.string()
                 .alphanum()
                 .min(3)
                 .max(30)
                 .required(),
        email:joi.string()
                 .trim()
                 .required()
                 .min(6)
                 .email(),
        pass: joi.string()
                 .trim()
                 .required()
                 .min(6),
        repeat_pass: joi.ref('pass'),
        isAdmin : false                       
    });
  

    const loginSchema = joi.object({
        email: joi.string()
                  .trim()
                  .required()
                  .min(6)
                  .email(),
        pass: joi.string()
                 .trim()
                 .required()
                 .min(6),
    });


module.exports = {singUpSchema, loginSchema};
