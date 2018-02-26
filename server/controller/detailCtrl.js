const axios = require('axios');

require('dotenv').config();

const detailUrl = process.env.DETAIL_URL;

module.exports = {
  getDetail: (req, res) => {
    axios.get(detailUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}