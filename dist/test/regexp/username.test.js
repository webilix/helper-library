"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['username', 'user1.-name'];
const invalid = ['ur', 'username1', '.username', 'username.', 'username-'];
(0, _1.testVerify)('USERNAME', (0, shared_1.regexpUsername)(), valid, invalid);
(0, _1.testVerify)('USERNAME', (0, shared_1.regexpUsername)(5, false, false), [], ['user', 'user.name', 'user-name']);
(0, _1.testVerify)('USERNAME', (0, shared_1.regexpUsername)(3, false, false, true, false), ['abc', 'ab1'], ['123', '1ab']);
(0, _1.testVerify)('USERNAME', (0, shared_1.regexpUsername)(3, false, false, false, true), ['abc', '1ab'], ['123', 'ab1']);
test('RE USERNAME: invalid input', () => {
    const test = () => (0, shared_1.regexpUsername)(2);
    expect(test).toThrow();
});
//# sourceMappingURL=username.test.js.map