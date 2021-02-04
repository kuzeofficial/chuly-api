'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostsSchema = new Schema({
  title: String,
  author: String,
  fecha: { type: Date, default: Date.now() },
  content: String,
})



module.exports = mongoose.model('Post', PostsSchema)