var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')
/* /movies... */
router.get('/', flightsCtrl.index)
router.get('/flights', flightsCtrl.index)
//router.get('/addFlight', ()=>{console.log('routestest')})
router.get('/addFlight', flightsCtrl.newFlight)


router.post('/add', flightsCtrl.create)


module.exports = router;
