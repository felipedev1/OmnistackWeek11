const express = require('express')
const ongControler = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')
const routes = express.Router()

routes.get('/ongs', ongControler.index)
routes.post('/ongs', ongControler.create)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profile', profileController.index)

routes.post('/session', sessionController.create)

module.exports = routes