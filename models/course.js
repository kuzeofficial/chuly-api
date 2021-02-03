'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
  name: { type: String, unique: true},
  photo: String,
})



module.exports = mongoose.model('Course', CourseSchema)