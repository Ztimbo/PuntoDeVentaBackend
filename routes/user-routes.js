'use strict'

//Library dependencies
var express = require('express');
//Local dependencies
var userController = require('../controllers/user-controller');
var prefix = require('../helpers/prefix-routes');

var api = express.Router();
api.post(`${prefix.USER}/save`, userController.saveUser);

module.exports = api;