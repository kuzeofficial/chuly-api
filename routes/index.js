'use strict'

const express = require('express')
const userCtrl = require('../controllers/user')
const Teachers = require('../controllers/teachers')
const Courses = require('../controllers/courses')
const Teacher = require('../models/teacher')
const Course = require ('../models/course')
const api = express.Router()

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.post('/teachers', Teachers.Teachers)
api.get('/teachers', (req, res) =>  {
    Teacher.find({}, (err, Teachers) => {
        if (err) return res.status(500).send({message: 'Error al realizar la peticion'})
        if (!Teachers) return res.status(404).send({message: 'No hay profesores'})
        
        res.status(200).send(Teachers)
    })
})
api.post('/courses', Courses.Courses)
api.get('/courses', (req, res) =>  {
    Course.find({}, (err, Courses) => {
        if (err) return res.status(500).send({message: 'Error al realizar la peticion'})
        if (!Courses) return res.status(404).send({message: 'No hay cursos'})
        
        res.status(200).send(Courses)
    })
})
module.exports = api
