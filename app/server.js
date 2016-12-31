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
console.log('TEST POC begins --> atempting to find all...');
var findall = models.UsersModel.findAll();
findall
    .catch(function (error) {
    throw error;
})
    .done(function (users) {
    console.log('Returned ' + users.length + ' users.');
    users.forEach(function (user) {
        console.log(user.UserName + ' (' + user.UserID + ')');
    });
    console.log('\n\n TEST POC ends');
});
app.get('/users', function (req, res) {
    models.UsersModel.findAll().then(function (result) { return res.json(result); });
});
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    models.UsersModel.findById(id).then(function (result) { return res.json(result); });
});
app.listen(3000);
//# sourceMappingURL=server.js.map