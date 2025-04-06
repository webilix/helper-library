import { regexpUrl } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = [
    'http://domain.com',
    'https://domain.co.com',
    'http://www.dd.com/',
    'https://d.co/',
    'https://d.c.co/',
];
const invalid: string[] = ['http//domain.com', 'http:domain.com', 'domain.com', 'https://d.c/'];

testVerify('URL', regexpUrl(), valid, invalid);
testVerify('URL', regexpUrl(true), ['https://google.com/page,1'], []);
testVerify('URL', regexpUrl(false), [], ['https://google.com/page,1']);
testFind('URL', regexpUrl(), valid, invalid);
testReplace('URL', regexpUrl(), valid, invalid);
