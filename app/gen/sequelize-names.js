'depends typescript-client-server-compat.js';
"use strict";
var TableNames = (function () {
    function TableNames() {
        this.Campuses = 'Campuses';
    }
    return TableNames;
}());
exports.TableNames = TableNames;
exports.tableNames = new TableNames();
var CampusesFields = (function () {
    function CampusesFields() {
        this.id = 'id';
        this.name = 'name';
        this.location_id = 'location_id';
    }
    return CampusesFields;
}());
exports.CampusesFields = CampusesFields;
exports.campusesFields = new CampusesFields();
var CalculatedFields = (function () {
    function CalculatedFields() {
    }
    return CalculatedFields;
}());
exports.CalculatedFields = CalculatedFields;
exports.calculatedFields = new CalculatedFields();
var References = (function () {
    function References() {
        this.id = { tableName: 'Campuses', primaryKey: 'id', foreignKey: 'id', as: undefined };
    }
    return References;
}());
exports.References = References;
exports.references = new References();
//# sourceMappingURL=sequelize-names.js.map