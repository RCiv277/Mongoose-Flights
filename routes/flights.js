var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')
/* /movies... */
router.get('/', flightsCtrl.index)
router.get('/flights', flightsCtrl.index)
//router.get('/addFlight', ()=>{console.log('routestest')})
router.get('/flights/addFlight', flightsCtrl.newFlight)
router.get('/:id', flightsCtrl.show)

router.post('/add', flightsCtrl.createFlight)


module.exports = router;
