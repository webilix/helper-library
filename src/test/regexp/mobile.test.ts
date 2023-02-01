import { regexpMobile } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['09123456789', '0912 345 6789', '0912-345-6789'];
const invalid: string[] = ['0912345678', '9123456789', '+989123456789'];

testVerify('MOBILE', regexpMobile, valid, invalid);
testFind('MOBILE', regexpMobile, valid, invalid);
testReplace('MOBILE', regexpMobile, valid, invalid);
