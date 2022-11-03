'use strict'

//Library dependencies
var bcrypt = require('bcrypt-nodejs');
//Local dependencies
var Role = require('../models/role');
var errorMessage = require('../helpers/error-message');

function saveRole(req, res) {
    var role = new Role();
    var params = req.body;

    if(!params.name) {
        res.status(500).send({message: `${errorMessage[500].INCOMPLETE_FIELDS}`});
    } else {
        role.name = params.name;
        role.save((err, roleStored) => {
            if(err) {
                res.status(500).send({message: `${errorMessage[500].SERVER_ERROR}: ${err.message}`});
            } else {
                res.status(200).send({ role: roleStored });
            }
        });
    }
}

module.exports = {
    saveRole
}