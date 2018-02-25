const router = require('express').Router();
const listCtrl = require('./controller/listCtrl');
// const detailCtrl = require('../controller/detailCtrl');

router.route('/item')
  .get(listCtrl.getList);

module.exports = router; 

