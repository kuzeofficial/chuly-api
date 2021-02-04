'use strict'

const publicacion = require('../models/post')

function Posts (req, res) {
  const posts = new publicacion({
    title: req.body.title,
    author: req.body.author,
    fecha: req.body.fecha,
    content: req.body.content
  })

  posts.save((err) => {
    if (err) return res.status(500).send({ message: `Error al añadir la publicacion: ${err}` })

    return res.status(201).send({ speciality: "Publicacion añadida" })
  })
}

module.exports = {
    Posts
}
