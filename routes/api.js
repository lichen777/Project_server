var express = require('express')
var serviceControl = require('../controllers/serviceController')
var proControl = require('../controllers/proController')
var transControl = require('../controllers/transController')

var router = express.Router()

// API routes for service
router.route('/service/user/:uid')
  .get(serviceControl.getServiceByUId)

router.route('/service/pro/:pid')
  .get(serviceControl.getServiceByPId)

router.route('/service')
  .post(serviceControl.addNewService)

router.route('/service/:id')
  .put(serviceControl.updateService)

router.route('/pro/:type')
  .get(proControl.getOnePro)

router.route('/pro')
  .post(proControl.addPro)

router.route('/transaction')
  .post(transControl.addTransaction)

module.exports = router
