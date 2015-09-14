'use strict';
var all = require('promise-all');
var sliced = require('sliced');

module.exports = function call() {
	var args = sliced(arguments);
	return all(args).then(function (values) {
		var fn = values.shift();
		return fn.apply(undefined, values);
	});
};
