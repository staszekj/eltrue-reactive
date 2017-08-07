const express = require('express');
const router = express.Router();

const usersdb = [{
  firstName: 'George',
  lastName: 'Orwell'
},
  {
    firstName: 'Charles',
    lastName: 'Darwin'
  }
];

router.get('/', function (req, res) {
  res.send('Ding dong, something\'s wrong ;-)')
});

router.put('/registration', (req, res) => {
  usersdb.push(req.body);
  res.send({
    status: 'OK'
  });
});

router.get('/user', (req, res) => {
  res.json(usersdb);
});

module.exports = router;
