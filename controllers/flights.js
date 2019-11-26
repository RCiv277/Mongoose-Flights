const Flight = require('../model/flights')

module.exports = {
    index,
    newFlight,
    createFlight,
    show
}
function createFlight(req, res) {
  console.log('yo') 
  let createdFlight = new Flight(req.body);
  Flight.create(createdFlight, function(err, flight) {
    if (err) {
    res.redirect('/flights')}; //send the error to the browser
    res.redirect('/flights');
  });
}

function show(req, res) {
  console.log('hi')
  
  Flight.findById(req.params.id, function(err, flights) {
    res.render('flights/show', { title: 'Flight Details', flights});
  });
}

function newFlight(req, res){
  console.log('Ctrlnewtest')
  res.render('flights/new')
}

function index(req, res) {
  console.log('Welcome')
    Flight.find({}, function(err, flights) {
      res.render('flights/index', {flights});
    });
  }

/*  function add(req, res){
    console.log(req.body)
    Students.create(req.body, function(err, student){
        console.log(student)
        student.save(()=>
        res.redirect('/showAll')
        )
    })
} 
Array.from(Object.keys(Flight)).forEach(function(key){
  console.log(key + ":" + Flight[key]);
}); */