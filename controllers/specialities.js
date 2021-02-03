'use strict'

const especialidad = require('../models/speciality')

function Specialities (req, res) {
  const specialities = new especialidad({
    title: req.body.title,
    subtitle: req.body.subtitle,
  })

  specialities.save((err) => {
    if (err) return res.status(500).send({ message: `Error al añadir la especialidad: ${err}` })

    return res.status(201).send({ speciality: "Especialidad añadida" })
  })
}

module.exports = {
    Specialities
}
