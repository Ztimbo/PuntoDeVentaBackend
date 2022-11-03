'use strict'

//Library dependencies
var bcrypt = require('bcrypt-nodejs');
//Local dependencies
var user = require('../models/user');
var errorMessage = require('../helpers/error-message');

function saveUser(req, res) {
    var newUser = new user();
    var params = req.body;

    newUser.name = params.name;
    newUser.surname = params.surname;
    newUser.email = params.email;
    newUser.role = params.role;

    if(params.password) {
        bcrypt.hash(params.password, null, null, (err, hash) => {
            if(!err) {
                if(newUser.name && newUser.surname && newUser.email && newUser.role) {
                    newUser.password = hash;
                    newUser.save((err, userStored) => {
                        if(err) {
                            res.status(500).send({message: `${errorMessage[500].SERVER_ERROR}: ${err.message}`});
                        } else if(!userStored) {
                            res.status(404).send({message: `${errorMessage[404].USER.NOT_SAVED}`});
                        } else {
                            res.status(200).send({user: userStored});
                        }
                    });
                } else {
                    res.status(500).send({message: `${errorMessage[500].INCOMPLETE_FIELDS}: ${err.message}`});
                }
            } else {
                res.status(500).send({message: `${errorMessage[500].SERVER_ERROR}: ${err.message}`});
            }
        });
    } else {
        res.status(500).send({message: `${errorMessage[500].USER.PASSWORD_NOT_PROVIDED}`});
    }
}

module.exports = {
    saveUser
};