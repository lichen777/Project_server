const Pro = require('mongoose').model('Pro');

module.exports = {
  getOnePro: function (req, res) {
    Pro.find({type: req.params.type}).then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  addPro: function (req, res) {
    Pro.create(req.body).then(data => {
      if (data.length === 0) {
        res.status(404).send('No data found')
      } else {
        res.status(200).json(data)
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
