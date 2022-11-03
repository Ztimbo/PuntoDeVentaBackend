'use strict'

//Library dependencies
var express = require('express');
//Local dependencies
var roleController = require('../controllers/role-controller');
var prefix = require('../helpers/prefix-routes');

var api = express.Router();
api.post(`${prefix.ROLE}/save`, roleController.saveRole);

module.exports = api;