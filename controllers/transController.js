const Trans = require('mongoose').model('Trans');

module.exports = {
  addTransaction: function (req, res) {
    Trans.create(req.body).then(data => {
      res.status(200).json(data)
    }).catch(error => {
      console.log(error)
    })
  }
}
