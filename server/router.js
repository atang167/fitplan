const router = require('express').Router();
const listCtrl = require('./controller/listCtrl');
const detailCtrl = require('./controller/detailCtrl');

router.route('/list')
  .get(listCtrl.getList);

router.route('/detail/:planId')
  .get(detailCtrl.getDetail);

module.exports = router; 

