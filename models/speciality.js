'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpecialitiesSchema = new Schema({
  title: { type: String, unique: true},
  subtitle: String,
  photo: { type: String, unique: true}
})



module.exports = mongoose.model('Speciality', SpecialitiesSchema)