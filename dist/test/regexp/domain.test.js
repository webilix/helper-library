"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['domain.com', 'domain.co.com', 'www.dd.com', 'd.com', 'd.co'];
const invalid = ['d.c', 'www.'];
(0, _1.testVerify)('DOMAIN', shared_1.regexpDomain, valid, invalid);
(0, _1.testFind)('DOMAIN', shared_1.regexpDomain, valid, invalid);
(0, _1.testReplace)('DOMAIN', shared_1.regexpDomain, valid, invalid);
//# sourceMappingURL=domain.test.js.map