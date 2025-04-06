import { regexpUsername } from '../../lib/shared';

import { testVerify } from './_';

const valid: string[] = ['username', 'user1.-name'];
const invalid: string[] = ['ur', 'username1', '.username', 'username.', 'username-'];

testVerify('USERNAME', regexpUsername(), valid, invalid);
testVerify('USERNAME', regexpUsername(5, false, false), [], ['user', 'user.name', 'user-name']);
testVerify('USERNAME', regexpUsername(3, false, false, true, false), ['abc', 'ab1'], ['123', '1ab']);
testVerify('USERNAME', regexpUsername(3, false, false, false, true), ['abc', '1ab'], ['123', 'ab1']);

test('RE USERNAME: invalid input', () => {
    const test = () => regexpUsername(2);
    expect(test).toThrow();
});
