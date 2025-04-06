import { regexpHSLColor } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['hsl(0,0%,0%)', 'hsl(360,100%,100%)', 'hsl( 0 , 0% , 0% )', 'hsl( 360 , 100% , 100% )'];
const invalid: string[] = [
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

testVerify('HSL_COLOR', regexpHSLColor, valid, invalid);
testFind('HSL_COLOR', regexpHSLColor, valid, invalid);
testReplace('HSL_COLOR', regexpHSLColor, valid, invalid);
