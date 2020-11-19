const express = require('express')
const AddressController = require('./controllers/AddressController')
const UserController = require('./controllers/UserController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:id_user/addresses', AddressController.index)
routes.post('/users/:id_user/addresses', AddressController.store)

routes.get('/users/:id_user/techs', TechController.index)
routes.post('/users/:id_user/techs', TechController.store)
routes.delete('/users/:id_user/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes