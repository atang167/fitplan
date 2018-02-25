const axios = require('axios');

require('dotenv').config();

const listUrl = process.env.LIST_URL;

module.exports = {
  getList: (req, res) => {
    axios.get(listUrl)
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}


