"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = [
    'http://domain.com',
    'https://domain.co.com',
    'http://www.dd.com/',
    'https://d.co/',
    'https://d.c.co/',
];
const invalid = ['http//domain.com', 'http:domain.com', 'domain.com', 'https://d.c/'];
(0, _1.testVerify)('URL', (0, shared_1.regexpUrl)(), valid, invalid);
(0, _1.testVerify)('URL', (0, shared_1.regexpUrl)(true), ['https://google.com/page,1'], []);
(0, _1.testVerify)('URL', (0, shared_1.regexpUrl)(false), [], ['https://google.com/page,1']);
(0, _1.testFind)('URL', (0, shared_1.regexpUrl)(), valid, invalid);
(0, _1.testReplace)('URL', (0, shared_1.regexpUrl)(), valid, invalid);
//# sourceMappingURL=url.test.js.map