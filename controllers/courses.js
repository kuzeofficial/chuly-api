'use strict'

const curso = require('../models/course')

function Courses (req, res) {
  const courses = new curso({
    name: req.body.name,
    photo: req.body.photo,
  })

  courses.save((err) => {
    if (err) return res.status(500).send({ message: `Error al añadir el curso: ${err}` })

    return res.status(201).send({ course: "Curso añadido" })
  })
}

module.exports = {
    Courses
}
