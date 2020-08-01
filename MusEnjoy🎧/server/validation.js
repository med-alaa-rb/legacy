const joi = require('@hapi/joi');
// const  {User} = require('./model/superUserSchema');




// const registerValidation = data =>{
    const singUpSchema = joi.object({
        name: joi.string()
                 .min(6)
                 .required(),
        email:joi.string()
                 .trim()
                 .required()
                 .min(6)
                 .email(),
        pass: joi.string()
                 .trim()
                 .required()
                 .min(6)                    
    });
    // console.log(data)
    // console.log('AAAAAA')
    // console.log(schema)
    // return schema.validate(data)
// };

// const loginValidation = data =>{
    const loginSchema = joi.object({
        email: joi.string()
                  .trim()
                  .required()
                  .min(6)
                  .email(),
        pass: joi.string()
                 .trim()
                 .required()
                 .min(6)                    
    });
// };


module.exports = {singUpSchema, loginSchema};
