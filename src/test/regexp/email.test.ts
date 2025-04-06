import { regexpEmail } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['email@domain.com', 'email@domain.co.com', 'email@www.dd.com', 'email@d.com'];
const invalid: string[] = ['email@', '@domain.com', 'email.domain.com'];

testVerify('EMAIL', regexpEmail, valid, invalid);
testFind('EMAIL', regexpEmail, valid, invalid);
testReplace('EMAIL', regexpEmail, valid, invalid);
