const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config()
const uriDb = process.env.MONGO_URI
app.use(bodyParser.urlencoded({extended: false}));
const userData = require('./model/superUserSchema');
// const routerr = require('./routes/router.js');
var router = express.Router()

router.post('/', (req, res)=>{
  res.send(console.log(req.body))
 })
app.use('/signUp',router)




// app.use(logger('dev'));


mongoose.connect(uriDb, {useNewUrlParser: true, useUnifiedTopology: true});

const superdb = mongoose.connection;


superdb.on('error', console.error.bind(console, 'connection error:'));

superdb.once('open', function() {
    console.log('database connected')
  });


app.get('/', (req, res)=>{
  res.send('HellO')
});

app.post('/', (req, res)=>{
  console.log('inserted')
});



const port = process.env.PORT || 3000

app.listen(port , () => console.log(`app listening to http://localhost:${port}/`));
