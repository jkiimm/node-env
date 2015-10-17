'use strict';

var env = require('./topsecret.js');
var envInjector = require('../lib');

envInjector.load(env);
console.log(process.env);
