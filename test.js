import test from 'ava';
import fn from './';

test(t => {
	t.same(fn('unicorn v1.2.3 rainbow'), ['1.2.3']);
	t.same(fn('version 3.2.51(1)-release'), ['3.2.51']);
	t.same(fn('cp (GNU coreutils) 8.22'), []);
	t.same(fn('foo v2.0.0 rainbow 1.88'), ['2.0.0']);
	t.same(fn('foo v2.0.0 rainbow 1.88', {loose: true}), ['2.0.0', '1.88.0']);
	t.same(fn('cp (GNU coreutils) 8.22', {loose: true}), ['8.22.0']);
	t.same(fn('v1.0.0 foo 9.33 cp (GNU coreutils) 8.22 sad', {loose: true}), ['1.0.0', '9.33.0', '8.22.0']);
	t.same(fn('0.13.alpha.4', {loose: true}), ['0.13.0']);
	t.same(fn('PHP 5.6.0beta1 (cli) (built: Aug 30 2014 13:52:33)\n Copyright (c) 1997-2014 The PHP Group\nZend Engine v2.6.0-dev, Copyright (c) 1998-2014 Zend Technologies\n    with Xdebug v2.2.4, Copyright (c) 2002-2014, by Derick Rethans', {loose: true}), ['5.6.0', '2.6.0-dev', '2.2.4']);
	t.same(fn('Compass 0.12.7', {loose: true}), ['0.12.7']);
	t.same(fn('1.14.2beta', {loose: true}), ['1.14.2']);
	t.end();
});
