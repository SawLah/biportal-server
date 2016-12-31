"use strict";
var Sequelize = require('sequelize');
exports.initialized = false;
function initialize(database, username, password, options) {
    if (exports.initialized) {
        return;
    }
    exports.SEQUELIZE = new Sequelize(database, username, password, options);
    exports.CampusesModel = exports.SEQUELIZE.define('Campus', {
        'id': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'name': { type: Sequelize.STRING },
        'location_id': { type: Sequelize.INTEGER }
    }, {
        classMethods: {
            GetCampuses: function (campus) {
                var where = {};
                var id = parseInt(campus);
                if (isNaN(id)) {
                    if (campus['id'] !== undefined) {
                        where['id'] = campus['id'];
                    }
                    if (campus['name'] !== undefined) {
                        where['name'] = campus['name'];
                    }
                    if (campus['location_id'] !== undefined) {
                        where['location_id'] = campus['location_id'];
                    }
                }
                else {
                    where['!!cannotFindIdFieldOnCampuses!!'] = id;
                }
                return exports.CampusesModel.find({ where: where });
            }
        }
    });
    return exports;
}
exports.initialize = initialize;
//# sourceMappingURL=sequelize-models.js.map