const axios = require('axios');

require('dotenv').config();

const listUrl = process.env.LIST_URL;

module.exports = {
  getList: (req, res) => {
    axios.get(listUrl)
    .then((response) => {
      res.send({'list': response.data})
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}

