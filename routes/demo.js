'use strict';

const express       = require('express');
const route         = express.Router();
const demoCtrl  = require('../controllers');
const validate      = require('express-validation');
const validateSchema= require('../schema').validateDemo;

route.get('/demo/list', demoCtrl.getDemoList);

route.post('/demo/create', demoCtrl.createDemo);

route.put('/demo/update', demoCtrl.updateDemo);

route.delete('/demo/delete/:demoId', demoCtrl.deleteDemo);


module.exports = route;