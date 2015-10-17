'use strict';

var should = require('should');
var app = require('../lib');
var localenv = require('./fixtures/local.env');

describe('node-env-injector', function() {
  it('should inject object to user environment', function() {
    app.load(localenv);
    process.env.FOO.should.equal('http://localhost:9000');
    process.env.BAR.should.equal('youmustnotknowthis');
  });
});
