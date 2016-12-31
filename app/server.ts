var express = require('express');
var app = express();

import types = require('./gen/sequelize-types');
import models = require('./gen/sequelize-models');

var config = require('../config/config.js');
try { config = require('../config/config.local.js'); } catch (ex) { }

models.initialize(config.mysql.database, config.mysql.username, config.mysql.password, {
    dialect : 'mysql',
    define : {
        timestamps : false
    },
    host : config.mysql.host
});

//TEST POC begins -----------------------------

console.log('TEST POC begins --> atempting to find all...');

let findall = models.UsersModel.findAll();

findall
    .catch((error : any) => {
        throw error;
    })
    .done((users : any) => {
        console.log('Returned ' + users.length + ' users.');

        users.forEach((user : types.UsersPojo) => {
            console.log(user.UserName + ' (' + user.UserID + ')');
        });
        console.log('\n\n TEST POC ends');
    });
    
//TEST POC ends ------------------------------

app.get('/users', function(req, res){
    models.UsersModel.findAll().then(result => res.json(result) );
});

app.get('/user/:id', function(req, res){
    var id = req.params.id;
    models.UsersModel.findById(id).then(result => res.json(result));
})

app.listen(3000);