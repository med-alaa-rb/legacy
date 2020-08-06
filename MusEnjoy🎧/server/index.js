const express = require('express');
const app = express();
// const cors = require('cors')
const mongoose = require('mongoose');
// const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config()
const uriDb = process.env.MONGO_URI
app.use(bodyParser.urlencoded({extended: false}));
const { userData } = require('./model/superUserSchema');
// const routes = require('./routes/router.js');
const userAuth = require('./routes/auth');
const admin = require('./routes/admin');



// app.use(cors)
// app.use(express.static('public'))


mongoose.connect(uriDb, {useCreateIndex: true,
  useNewUrlParser: true, useUnifiedTopology: true});

const superdb = mongoose.connection;


superdb.on('error', console.error.bind(console, 'connection error:'));

superdb.once('open', function() {
    console.log('database connected')
  });


// app.get('/', (req, res)=>{
//   console.log(req.url);
//   res.send('HellO')
// });

// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin", "X-Requested-With", "Content-Type" , 
//   "Accept", "x-client-key", "x-client-token", "x-client-secret", "Authorization");
//     next();
//   });


app.use(express.json())


app.use('/',userAuth)
app.use('/admin', admin)




const port = process.env.PORT || 3000

app.listen(port , () => console.log(`app listening to http://localhost:${port}/`));
