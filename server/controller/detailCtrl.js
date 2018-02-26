const axios = require('axios');

require('dotenv').config();

const detailUrl = process.env.DETAIL_URL;

module.exports = {
  getDetail: (req, res) => {
    console.log(req);
    axios.get(detailUrl + '?planId=' + req.params.planId)
    .then((response) => {
      res.send(response.data.result);
    })
    .catch(err => {
      res.status(500).send(err); 
    })
  }
}