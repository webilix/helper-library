"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['2000-01-01T00:00:00.000Z'];
const invalid = ['2000-01-01 00:00:00', '2000-01-01T00:00:00.000', '2000-01-01T00:00:00Z'];
(0, _1.testVerify)('JSON DATE', shared_1.regexpJsonDate, valid, invalid);
(0, _1.testFind)('JSON DATE', shared_1.regexpJsonDate, valid, invalid);
(0, _1.testReplace)('JSON DATE', shared_1.regexpJsonDate, valid, invalid);
//# sourceMappingURL=json-date.test.js.map