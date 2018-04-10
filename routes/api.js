var express = require('express')
var serviceControl = require('../controllers/serviceController')
var proControl = require('../controllers/proController')
var transControl = require('../controllers/transController')

var router = express.Router()

// API routes for service
router.route('/api/service/:uid/:pid')
  .get(serviceControl.getServiceById)
  .post(serviceControl.addNewService)
  .put(serviceControl.updateService)

// API for user inbox
router.route('/api/pro/:zip')
  .get(proControl.get)

// API routes for projects
router.route('/api/transaction')
  .post(projectControl.addTransaction)

module.exports = router
