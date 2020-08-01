const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config()
const uriDb = process.env.MONGO_URI
app.use(bodyParser.urlencoded({extended: false}));
const { userData } = require('./model/superUserSchema');
// const routes = require('./routes/router.js');
const userAuth = require('./routes/auth');





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



app.use(express.json())


app.use('/',userAuth)





const port = process.env.PORT || 3000

app.listen(port , () => console.log(`app listening to http://localhost:${port}/`));
