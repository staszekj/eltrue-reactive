const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Api request sent: ', Date.now());
  next()
});

router.get('/', function (req, res) {
  res.send('Ding dong, something\'s wrong ;-)')
});

router.post('/sendEmail', function (req, res) {

  res.send({
    status: 'OK',
    message: req.body.subject
  })
});

router.get('/pizzaCreator', (req, res) => {
  res.send({
    pizzas: [
      {name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms']},
      {name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken']},
      {name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn']}
    ],
    toppings: [
      'Bacon', 'Pepperoni', 'Mushrooms', 'Herbs',
      'Chicken', 'Pineapple', 'Ham', 'Jalapeno'
    ]
  });
});

router.put('/registration', (req, res) => {
  res.send({
    status: 'OK'
  });
});

module.exports = router;
