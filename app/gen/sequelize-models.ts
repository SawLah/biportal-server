////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../typings/index.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var CampusesModel:types.CampusesModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    CampusesModel = <types.CampusesModel> SEQUELIZE.define<types.CampusesInstance, types.CampusesPojo>('Campus', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'name': {type: Sequelize.STRING},
        'location_id': {type: Sequelize.INTEGER}
        },
        {
            classMethods: {
                GetCampuses:(campus:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(campus);
                    if (isNaN(id)) {
                        if (campus['id'] !== undefined) { where['id'] = campus['id']}
                        if (campus['name'] !== undefined) { where['name'] = campus['name']}
                        if (campus['location_id'] !== undefined) { where['location_id'] = campus['location_id']}
                    } else {
                        where['!!cannotFindIdFieldOnCampuses!!'] = id;
                    }
                    return CampusesModel.find({where: where});
                }
            }
        });
    
    return exports;
}
