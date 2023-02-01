"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['127.0.0.1', '0.0.0.0', '255.255.255.255'];
const invalid = ['a.0.0.0', '0.a.0.0', '0.0.a.0', '0.0.0.a', '0.256.0.0', '0.0.256.0'];
(0, _1.testVerify)('IP4', shared_1.regexpIP4, valid, invalid);
(0, _1.testFind)('IP4', shared_1.regexpIP4, valid, invalid);
(0, _1.testReplace)('IP4', shared_1.regexpIP4, valid, invalid);
//# sourceMappingURL=ip4.test.js.map