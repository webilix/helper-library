"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['09123456789', '0912 345 6789', '0912-345-6789'];
const invalid = ['0912345678', '9123456789', '+989123456789'];
(0, _1.testVerify)('MOBILE', shared_1.regexpMobile, valid, invalid);
(0, _1.testFind)('MOBILE', shared_1.regexpMobile, valid, invalid);
(0, _1.testReplace)('MOBILE', shared_1.regexpMobile, valid, invalid);
//# sourceMappingURL=mobile.test.js.map