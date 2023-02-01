import { regexpPassword } from '../../lib/shared';

import { testVerify } from './_';

const valid: string[] = ['AAAaaa111'];
const invalid: string[] = ['Aa1', 'AAAAAAAA', 'aaaaaaaa', '11111111'];

testVerify('PASSWORD', regexpPassword(), valid, invalid);
testVerify('PASSWORD', regexpPassword(4), ['Aa1.'], invalid);
