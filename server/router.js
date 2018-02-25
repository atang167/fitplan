const router = require('express').Router();
const listCtrl = require('./controller/listCtrl');
// const detailCtrl = require('../controller/detailCtrl');

router.route('/list')
  .get(listCtrl.getList);

module.exports = router; 

