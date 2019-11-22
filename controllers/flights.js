const Flight = require('../model/flights')

module.exports = {
    index,
    newFlight,
    create
}
function create(req, res) {
  let createdFlight = new Flight(req.body);
  Flight.save(createdFlight, function(err, flight) {
    if (err) console.log(err); //send the error to the browser
    console.log(flight);
    res.redirect('flights/index');
  });
}


function newFlight(req, res){
  console.log('Ctrlnewtest')
  res.render('flights/new')
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', {flights});
    });
  }