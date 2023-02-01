"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['email@domain.com', 'email@domain.co.com', 'email@www.dd.com', 'email@d.com'];
const invalid = ['email@', '@domain.com', 'email.domain.com'];
(0, _1.testVerify)('EMAIL', shared_1.regexpEmail, valid, invalid);
(0, _1.testFind)('EMAIL', shared_1.regexpEmail, valid, invalid);
(0, _1.testReplace)('EMAIL', shared_1.regexpEmail, valid, invalid);
//# sourceMappingURL=email.test.js.map