import { regexpRGBColor } from '../../lib/shared';

import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['rgb(0,0,0)', 'rgb(255,255,255)', 'rgb( 0 , 0 , 0 )', 'rgb( 255 , 255 , 255 )'];
const invalid: string[] = [
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

testVerify('RGB_COLOR', regexpRGBColor, valid, invalid);
testFind('RGB_COLOR', regexpRGBColor, valid, invalid);
testReplace('RGB_COLOR', regexpRGBColor, valid, invalid);
