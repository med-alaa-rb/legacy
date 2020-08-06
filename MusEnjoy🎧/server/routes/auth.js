const auth = require("express").Router();
const bcrypt = require("bcrypt");
const { userData } = require("../model/superUserSchema");
const { singUpSchema, loginSchema } = require("../validation");
const jwt = require("jsonwebtoken");

// const checkAdmin = require("./adminValidation");

//  console.log(loginSchema)

auth.post("/register", async (req, res) => {
  console.log(req.body);
  // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  const { error } = await singUpSchema.validateAsync(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await userData.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.pass, salt);

  const user = new userData({
    name: req.body.name,
    email: req.body.email,
    pass: hash,
    isAdmin: false,
  });
  try {
    console.log(user.name);
    const savedUser = await user.save();
    res.send(`${user.name} saved to db`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// auth.get("/users", async (req, res, next) => {
//   var users = await userData.find({});
//   console.log(users)
// })

// auth.get("/admin", async (req, res, next) => {
//   var admin = await userData.findOne({ isAdmin: true });;
//   console.log(admin)
// })

auth.post("/login", async (req, res) => {
  // const validation = loginSchema.validate(req.body);
  // res.send(validation);
  try {
    const { error } = await loginSchema.validateAsync(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userData.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(`Email dosent exists`);

    const validPass = await bcrypt.compare(req.body.pass, user.pass);
    if (!validPass) return res.status(400).send("Invalid password");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token); /*send(token)*/

    const redirect = () => {
      var checkAdmin = user.isAdmin;
      if (checkAdmin === true) {
        res.send("admin");
      } else {
        res.send("user");
      }
    };
    redirect();
  } catch (err) {
    throw err;
  }
});

module.exports = auth;
