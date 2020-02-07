const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parkingSchema = new Schema({
  arr: []
})

module.exports = mongoose.model('Parking', parkingSchema)
