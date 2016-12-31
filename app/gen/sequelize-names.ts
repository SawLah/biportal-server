////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    campusFields:CampusesFields;
}

export class TableNames {
    Campuses:string = 'Campuses';
}
export var tableNames:TableNames = new TableNames();

export class CampusesFields {
    id:string = 'id';
    name:string = 'name';
    location_id:string = 'location_id';
}
export var campusesFields:CampusesFields = new CampusesFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    id:types.Reference = { tableName: 'Campuses', primaryKey: 'id', foreignKey: 'id', as: undefined};
}

export var references:References = new References();
