"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['hsl(0,0%,0%)', 'hsl(360,100%,100%)', 'hsl( 0 , 0% , 0% )', 'hsl( 360 , 100% , 100% )'];
const invalid = [
    '(0,0%,0%)',
    'hsl()',
    'hsl(0)',
    'hsl(0,0%)',
    'hsl(0,0%,0%,0%)',
    'hsl(0,,0%,0%)',
    'hsl(0,0%,101%)',
    'hsl(361,100%,100%)',
    'hsl(0,0,-1%)',
    'hsl(0,0,a)',
];
(0, _1.testVerify)('HSL_COLOR', shared_1.regexpHSLColor, valid, invalid);
(0, _1.testFind)('HSL_COLOR', shared_1.regexpHSLColor, valid, invalid);
(0, _1.testReplace)('HSL_COLOR', shared_1.regexpHSLColor, valid, invalid);
//# sourceMappingURL=hsl-color.test.js.map