const router = require('express').Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

let accounts = [{
    "name": "paulhal",
    "email": "email@sss.com",
    "pass": "admin"
  },
  {
    "name": "hal",
    "email": "email1@sss.com",
    "pass": "min"
  },
  {
    "name": "paul",
    "email": "email2@sss.com",
    "pass": "admiin"
  }];

router.get(`/accounts`, (request, response) => {
  response.json(accounts);
});

router.get(`/accounts/:id`, (request, response) => {
  const accountId = Number(request.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getAccount);
  }
});


router.post(`/accounts`, (request, response) => {
    const incomingAccount = request.body;
    console.log(incomingAccount)
  
    accounts.push(incomingAccount);
  
     response.json(accounts);
  })






module.exports = router;