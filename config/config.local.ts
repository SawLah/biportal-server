/// <reference path="../typings/index.d.ts"/>
'use strict';

var path = require('path');

// copy this file to config.local.ts and apply any modifications

module.exports = {
  directory: path.join(__dirname, 'models'),
  username: "root",
  password: 'admin',
  database: 'test',
  host: '127.0.0.1',
  pool: { maxConnections: 5, maxIdleTime: 30000},

  rand: function() {
      return parseInt(String(Math.random() * 999), 10);
  },

  //runOnDialects: ['mysql','sqlite','postgres','mssql'],
  runOnDialects: ['mysql'],

  //make maxIdleTime small so that tests exit promptly
  mysql: {
    username: "root",
    password: 'admin',
    database: 'test',
    host: '127.0.0.1',
    port: 3306,
    pool: { maxConnections: 5, maxIdleTime: 30}
  } 
}
