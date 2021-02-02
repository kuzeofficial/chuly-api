'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeacherSchema = new Schema({
  name: { type: String, unique: true},
  photo: String,
  country: String,
})



module.exports = mongoose.model('Teacher', TeacherSchema)