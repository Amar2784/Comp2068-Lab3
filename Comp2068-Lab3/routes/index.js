var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'amarjeet',
    name: 'Amarjeet Singh',
    age: 18,
    cityBorn: 'Pathankot',
    cityResiding: 'Barrie',
    hobby: 'playing Basketball'
  },
  {
    route: 'palwinder',
    name: 'Palwinder Singh',
    age: 40,
    cityBorn: 'Pathankot',
    cityResiding: 'Pathankot',
    hobby: 'Watching tv'
  },
  {
    route: 'kuldeep',
    name: 'Kuldeep Kaur',
    age:39,
    cityBorn: 'Pathnkot',
    cityResiding: 'Pathankot',
    hobby: 'doing work from home'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});

// router.get('/amarjeet', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     route: 'amarjeet',
//    name: 'Amarjeet Singh',
//    age: 18,
//    cityBorn: 'Pathankot',
//    cityResiding: 'Barrie',
//    hobby: 'playing Basketball'
//   });
// });

// router.get('/palwinder', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     route: 'palwinder',
//    name: 'Palwinder Singh',
//    age: 40,
//    cityBorn: 'Pathankot',
//    cityResiding: 'Pathankot',
//    hobby: 'Watching tv'
//   });
// });

module.exports = router;
