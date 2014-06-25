'use strict';
var assert = require('assert');
var findVersions = require('./');

it('should find versions in a string', function () {
	assert.deepEqual(findVersions('unicorn 1.0.0 rainbow'), ['1.0.0']);
	assert.deepEqual(findVersions('version 3.2.51(1)-release'), ['3.2.51']);
	assert.deepEqual(findVersions('cp (GNU coreutils) 8.22'), []);
	assert.deepEqual(findVersions('foo v2.0.0 rainbow 1.88'), ['2.0.0']);
	assert.deepEqual(findVersions('foo v2.0.0 rainbow 1.88', {loose: true}), ['2.0.0', '1.88.0']);
	assert.deepEqual(findVersions('cp (GNU coreutils) 8.22', {loose: true}), ['8.22.0']);
	assert.deepEqual(findVersions('v1.0.0 foo 9.33 cp (GNU coreutils) 8.22 sad', {loose: true}), ['1.0.0', '9.33.0', '8.22.0']);
	assert.deepEqual(findVersions('0.13.alpha.4', {loose: true}), ['0.13.0']);
});
