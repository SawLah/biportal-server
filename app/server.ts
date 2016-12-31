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

console.log('TEST POC begins --> atempting to find all... \n \n');

let findall = models.CampusesModel.findAll();

findall
    .catch((error : any) => {
        throw error;
    })
    .done((users : any) => {
        console.log('Returned ' + users.length + ' campuses.');
        users.forEach((campus : types.CampusesPojo) => {
            console.log(campus.id + ' ( ' + campus.name + ' - ' + campus.location_id+ ' )');
        });
        console.log('\n\n TEST POC ends');
    });
    
//TEST POC ends ------------------------------

app.get('/campuses', function(req, res){
    models.CampusesModel.findAll().then(result => res.json(result) );
});

app.get('/campus/:id', function(req, res){
    var id = req.params.id;
    models.CampusesModel.findById(id).then(result => res.json(result));
})

app.listen(3000);