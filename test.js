import test from 'ava';
import findVersions from './index.js';

test('main', t => {
	t.deepEqual(findVersions('unicorn v1.2.3 rainbow'), ['1.2.3']);
	t.deepEqual(findVersions('version 3.2.51(1)-release'), ['3.2.51']);
	t.deepEqual(findVersions('cp (GNU coreutils) 8.22'), []);
	t.deepEqual(findVersions('foo v2.0.0 rainbow 1.88'), ['2.0.0']);
	t.deepEqual(findVersions('foo v2.0.0 rainbow 1.88', {loose: true}), ['2.0.0', '1.88.0']);
	t.deepEqual(findVersions('cp (GNU coreutils) 8.22', {loose: true}), ['8.22.0']);
	t.deepEqual(
		findVersions('v1.0.0 foo 9.33 cp (GNU coreutils) 8.22 sad', {loose: true}),
		['1.0.0', '9.33.0', '8.22.0']
	);
	t.deepEqual(findVersions('0.13.alpha.4', {loose: true}), ['0.13.0']);
	// TODO: Disabled because of https://github.com/sindresorhus/semver-regex/pull/15#issuecomment-751278009
	// t.deepEqual(
	// 	findVersions('PHP 5.6.0beta1 (cli) (built: Aug 30 2014 13:52:33)\n Copyright (c) 1997-2014 The PHP Group\nZend Engine v2.6.0-dev, Copyright (c) 1998-2014 Zend Technologies\n    with Xdebug v2.2.4, Copyright (c) 2002-2014, by Derick Rethans', {loose: true}),
	// 	['5.6.0', '2.6.0-dev', '2.2.4']
	// );
	t.deepEqual(findVersions('Compass 0.12.7', {loose: true}), ['0.12.7']);
	t.deepEqual(findVersions('1.14.2beta', {loose: true}), ['1.14.2']);
	/// t.deepEqual(
	// 	findVersions('PHP 7.0.0RC6 (cli) (built: Oct 29 2015 13:46:05) ( NTS )\nCopyright (c) 1997-2015 The PHP Group\nZend Engine v3.0.0-dev, Copyright (c) 1998-2015 Zend Technologies', {loose: true}),
	// 	['7.0.0', '3.0.0-dev']
	// );
});
