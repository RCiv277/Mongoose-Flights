const mongoose = require('mongoose')

const flightsSchema = new mongoose.Schema({
    airline: {type: String , enum: ['American Airlines', 'Southwest' , 'United'], required:true },
    flightNo: {min: 10, max: 9000, type:Number, required:true },
    departs:{type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
})

module.exports = mongoose.model('Flight', flightsSchema)