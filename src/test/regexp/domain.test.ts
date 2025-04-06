import { regexpDomain } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['domain.com', 'domain.co.com', 'www.dd.com', 'd.com', 'd.co'];
const invalid: string[] = ['d.c', 'www.'];

testVerify('DOMAIN', regexpDomain, valid, invalid);
testFind('DOMAIN', regexpDomain, valid, invalid);
testReplace('DOMAIN', regexpDomain, valid, invalid);
