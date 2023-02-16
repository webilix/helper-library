"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../lib/shared");
const _1 = require("./_");
const valid = ['rgb(0,0,0)', 'rgb(255,255,255)', 'rgb( 0 , 0 , 0 )', 'rgb( 255 , 255 , 255 )'];
const invalid = [
    '(0,0,0)',
    'rgb()',
    'rgb(0)',
    'rgb(0,0)',
    'rgb(0,0,0,0)',
    'rgb(0,,0,0)',
    'rgb(0,0,256)',
    'rgb(0,0,-255)',
    'rgb(0,0,a)',
];
(0, _1.testVerify)('RGB_COLOR', shared_1.regexpRGBColor, valid, invalid);
(0, _1.testFind)('RGB_COLOR', shared_1.regexpRGBColor, valid, invalid);
(0, _1.testReplace)('RGB_COLOR', shared_1.regexpRGBColor, valid, invalid);
//# sourceMappingURL=rgb-color.test.js.map