'use strict';
var test = require('ava');
var sliced = require('sliced');
var call = require('../src');

test('one argument', function (assert) {
	assert.plan(1);
	function greet(val) {
		return 'hello ' + val;
	}
	return call(greet, Promise.resolve('world'))
		.then(function (actual) {
			var expected = 'hello world';
			assert.is(actual, expected);
		});
});

test('multiple arguments', function (assert) {
	assert.plan(1);
	function join(sep) {
		return function () {
			return sliced(arguments).join(sep);
		};
	}
	return call(join(' '), Promise.resolve('hello'), Promise.resolve('world'))
		.then(function (actual) {
			var expected = 'hello world';
			assert.is(actual, expected);
		});
});

test('non-promise values', function (assert) {
	assert.plan(1);
	function join(sep) {
		return function () {
			return sliced(arguments).join(sep);
		};
	}
	return call(join(' '), 'hello', 'world')
		.then(function (actual) {
			var expected = 'hello world';
			assert.is(actual, expected);
		});
});

test('function to call is a promise', function (assert) {
	assert.plan(1);
	function join(sep) {
		return Promise.resolve(function () {
			return sliced(arguments).join(sep);
		});
	}
	return call(join(' '), 'hello', 'world')
		.then(function (actual) {
			var expected = 'hello world';
			assert.is(actual, expected);
		});
});
