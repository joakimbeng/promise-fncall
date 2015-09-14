'use strict';
var all = require('promise-all');
var sliced = require('sliced');

module.exports = function call(fn) {
	var args = sliced(arguments, 1);
	return all(args).then(function (values) {
		return fn.apply(undefined, values);
	});
};
