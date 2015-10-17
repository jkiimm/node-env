'use strict';

var _ = require('lodash');
var path = require('path');

function processDirectives(options) {

  var dispatch = {
    add: add,
    replace: replace,
    unshift: arrayLike.bind({}, 'unshift'),
    push: arrayLike.bind({}, 'push'),
    concat: arrayLike.bind({}, 'push'),
  };

  _.forEach(options, function(optionData, option) {
    if (option === 'options') {
      return;
    }
    var fn = dispatch[option];
    var type = typeof optionData;
    if (fn && type === 'object') {
      _.forEach(optionData, fn);
    } else {
      var data = {};
      data[option] = type === 'function' ? optionData() : optionData;
      _.extend(process.env, data);
    }
  });
}

function add(value, key) {
  if (process.env[key]) {
    return console.info(key + ' already exists, leaving unchanged.');
  }

  var data = {};
  data[key] = value;
  _.extend(process.env, data);
}

function replace(value, key) {
  if (!process.env[key]) {
    return console.info(key + ' doesn\'t exist, refusing to replace.');
  }
  process.env[key] = value;
}

function arrayLike(method, value, key) {
  process.env[key] = process.env[key] || '';
  var delimiter = value ? value.delimiter || '' : '';

  if (typeof value === 'object') {
    value = value.value;
  }

  if (method === 'unshift') {
    process.env[key] = value + delimiter + process.env[key];
  } else if (method === 'push') {
    process.env[key] += delimiter + value;
  }
}


module.exports = {
  load: function(data) {
    var data = _.clone(data);
    processDirectives(data);
  },
};
