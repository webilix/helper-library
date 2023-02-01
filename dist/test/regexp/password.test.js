"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['AAAaaa111'];
const invalid = ['Aa1', 'AAAAAAAA', 'aaaaaaaa', '11111111'];
(0, _1.testVerify)('PASSWORD', (0, shared_1.regexpPassword)(), valid, invalid);
(0, _1.testVerify)('PASSWORD', (0, shared_1.regexpPassword)(4), ['Aa1.'], invalid);
//# sourceMappingURL=password.test.js.map