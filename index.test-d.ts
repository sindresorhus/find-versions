import {expectType} from 'tsd';
import findVersions from './index.js';

expectType<string[]>(findVersions('node v1.0.0'));
expectType<string[]>(findVersions('1.0', {loose: true}));
