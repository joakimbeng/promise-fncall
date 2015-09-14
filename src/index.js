'use strict';
var apply = require('promise-fnapply');
var sliced = require('sliced');

module.exports = function call(fn) {
	var args = sliced(arguments, 1);
	return apply(fn, args);
};
