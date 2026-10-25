"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['01-01', '01-31', '06-31', '07-01', '07-30', '12-30'];
const invalid = ['00-01', '13-01', '1-01', '01-00', '01-1', '01-32', '12-31'];
(0, _1.testVerify)('DAY', shared_1.regexpDay, valid, invalid);
(0, _1.testFind)('DAY', shared_1.regexpDay, valid, invalid);
(0, _1.testReplace)('DAY', shared_1.regexpDay, valid, invalid);
//# sourceMappingURL=day.test.js.map