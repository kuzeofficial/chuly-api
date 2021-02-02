'use strict'

const profesor = require('../models/teacher')

function Teachers (req, res) {
  const teacher = new profesor({
    name: req.body.name,
    photo: req.body.photo,
    country: req.body.country,
  })

  teacher.save((err) => {
    if (err) return res.status(500).send({ message: `Error al añadir el profesor: ${err}` })

    return res.status(201).send({ teacher: "Teacher añadido" })
  })
}

module.exports = {
    Teachers
}
