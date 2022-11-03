'use strict'

//Library dependencies
var express = require('express');
var bodyParser = require('body-parser');
//Local dependencies
var user_routes = require('./routes/user-routes');
var role_routes = require('./routes/role-routes');
var prefixes = require('./helpers/prefix-routes');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(`${prefixes.API}`, user_routes);
app.use(`${prefixes.API}`, role_routes);

module.exports = app;