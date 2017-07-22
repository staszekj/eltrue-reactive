const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Api request sent: ', Date.now());
  next()
});

router.get('/', function (req, res) {
  res.send('Ding dong, something\'s wrong ;-)')
});

router.put('/registration', (req, res) => {
  res.send({
    status: 'OK'
  });
});

module.exports = router;
