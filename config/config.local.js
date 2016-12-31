'use strict';
var path = require('path');
module.exports = {
    directory: path.join(__dirname, 'models'),
    username: "root",
    password: 'admin',
    database: 'sequelizets',
    host: '127.0.0.1',
    pool: { maxConnections: 5, maxIdleTime: 30000 },
    rand: function () {
        return parseInt(String(Math.random() * 999), 10);
    },
    runOnDialects: ['mysql'],
    mysql: {
        username: "root",
        password: 'admin',
        database: 'sequelizets',
        host: '127.0.0.1',
        port: 3306,
        pool: { maxConnections: 5, maxIdleTime: 30 }
    }
};
//# sourceMappingURL=config.local.js.map