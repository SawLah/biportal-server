"use strict";
var express = require('express');
var app = express();
var models = require('./gen/sequelize-models');
var config = require('../config/config.js');
try {
    config = require('../config/config.local.js');
}
catch (ex) { }
models.initialize(config.mysql.database, config.mysql.username, config.mysql.password, {
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    host: config.mysql.host
});

console.log('TEST POC begins ---> atempting to find all... \n \n');

var findall = models.CampusesModel.findAll();
findall
    .catch(function (error) {
    throw error;
})
    .done(function (users) {
    console.log('Returned ' + users.length + ' campuses.');
    users.forEach(function (campus) {
        console.log(campus.id + ' ( ' + campus.name + ' - ' + campus.location_id + ' )');
    });
    console.log('\n\n TEST POC ends');
});
app.get('/campuses', function (req, res) {
    models.CampusesModel.findAll().then(function (result) { return res.json(result); });
});
app.get('/campus/:id', function (req, res) {
    var id = req.params.id;
    models.CampusesModel.findById(id).then(function (result) { return res.json(result); });
});
app.listen(3000);
//# sourceMappingURL=server.js.map