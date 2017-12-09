require('ignore-styles');

require("babel-register")({
    ignore: /\/(build|node_modules)\//,
    presets: ['env', 'react']
});

/*
require('babel-polyfill');
*/

var extendRequire = require("isomorphic-loader/lib/extend-require");

extendRequire(function (err) {
    if (err) {
        console.log(err);
    } else {
        require('./server/index.js');
    }
});

