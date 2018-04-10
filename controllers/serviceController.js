const Service = require('mongoose').model('Service');

module.exports = {
  getServiceByUId: function (req, res) {
    Service.find({customerId: req.params.uid, }).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      res.json(err)
    })
  },
  getServiceByPId: function (req, res) {
    Service.find({proId: req.params.pid, }).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      res.json(err)
    })
  },
  addNewService: function (req, res) {
    Service.create(req.body).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      res.json(err)
    })
  },
  updateService: function (req, res) {
    Service.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true } ).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      res.json(err)
    })
  }
}
